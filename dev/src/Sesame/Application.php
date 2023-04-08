<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 6/15/2016
 * Time: 1:28 PM
 */

namespace Sesame;

use Sesame\Config\DataConfiguration;
use Sesame\Controller\NavigationController;
use Sesame\Controller\PageController;
use Sesame\Controller\WelcomeTextController;
use Sesame\Formatters\MemberSiteFormatter;
use Sesame\Formatters\SitePageFormatter;
use Symfony\Component\Config\Definition\Processor;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

class Application
{
    /** @var  RouteCollection */
    private $routeCollection;

    public function initialize()
    {
        $processor = new Processor();
        $configuration = new DataConfiguration();

        $config = [json_decode(file_get_contents(dirname(__FILE__) . '/../../config/data.json'), true)];
        $processedConfig = $processor->processConfiguration($configuration, $config);

        $this->loadConfig($processedConfig);
    }

    /**
     * @param $config
     * Route pages??
     * Route hub-navigation??
     */
    private function loadConfig($config)
    {
        $this->routeCollection = new RouteCollection();

        $site = new MemberSiteFormatter($config['site']);

        foreach ($config['pages'] as $routename => $page) {
            $sitepage = new SitePageFormatter($page);

            $this->routeCollection->add($routename, new Route('/{sitename}' . $page['path'], array(
                '_controller' => PageController::class,
                '_action' => 'showAction',
                'page' => $sitepage,
                'site' => $site
            )));
        }
        /**
         * Get data from hub
         */
        $this->routeCollection->add('hub-navigation', new Route('/.well-known/.hub-navigation/{accountname}', [
            '_controller' => NavigationController::class,
            '_action' => 'lookupAction'
        ]));

        /**
         * Get data from hub
         */
        $this->routeCollection->add('hub-welcome-text', new Route('/.well-known/.hub-welcome-text/{accountname}', [
            '_controller' => WelcomeTextController::class,
            '_action' => 'lookupAction'
        ]));

        /***********************************/

        /**
         * Add/update data
         */
        $this->routeCollection->add('hub-navigation-update', new Route('/.well-known/.hub-navigation/{accountname}/update', [
            '_controller' => NavigationController::class,
            '_action' => 'updateAction'
        ]));

        /**
         * Add update data
         */
        $this->routeCollection->add('hub-welcome-text-update', new Route('/.well-known/.hub-welcome-text/{accountname}/update', [
            '_controller' => WelcomeTextController::class,
            '_action' => 'updateAction'
        ]));

        /***********************************/

        /**
         * Delete data and reset
         */
        $this->routeCollection->add('hub-navigation-delete', new Route('/.well-known/.hub-navigation/{accountname}/delete', [
            '_controller' => NavigationController::class,
            '_action' => 'deleteAction'
        ]));

        /**
         * Delete data and reset
         */
        $this->routeCollection->add('hub-welcome-text-delete', new Route('/.well-known/.hub-welcome-text/{accountname}/delete', [
            '_controller' => WelcometextController::class,
            '_action' => 'deleteAction'
        ]));

    }

    /**
     * @param Request $request
     * @return Response
     */
    public function handle(Request $request)
    {
        $params = $this->resolveParameters($request);
        $controllerClass = $params['_controller'];
        $controllerAction = $params['_action'];
        $controllerParams = $this->resolveControllerParameters($controllerClass, $controllerAction, $params);

        $controller = new $controllerClass();
        $response = call_user_func_array([$controller, $controllerAction], $controllerParams);

        return $response;
    }

    public function resolveParameters(Request $request)
    {
        $context = new RequestContext('/');
        $matcher = new UrlMatcher($this->routeCollection, $context);
        $parameters = $matcher->matchRequest($request);

        if (isset($parameters['site'])) {
            $parameters['site']->setPageSlug($parameters['page']['slug']);
        }

        $parameters['request'] = $request;

        $request->attributes->add($parameters);

        return $parameters;
    }

    public function resolveControllerParameters($controllerClass, $action, $params)
    {
        $reflClass = new \ReflectionClass($controllerClass);
        $reflMethod = $reflClass->getMethod($action);
        $paramList = $reflMethod->getParameters();

        $actionParams = [];
        foreach ($paramList as $reflParam) {
            $paramName = $reflParam->name;
            if (!isset($params[$paramName])) {
                throw new \InvalidArgumentException(sprintf('Required controller parameter "%s" not present.', $paramName));
            }

            $actionParams[] = $params[$paramName];
        }

        return $actionParams;
    }
}
