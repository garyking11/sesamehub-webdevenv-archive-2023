<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 6/9/2016
 * Time: 3:40 PM
 */

namespace Sesame\Formatters;


class SitePageFormatter implements \ArrayAccess
{
    private $params;

    function __construct($params)
    {
        $this->params = $params;
    }

    public function getTitle()
    {
        return $this->params['title'];
    }

    public function getHeadline()
    {
        return $this->params['headline'];
    }

    public function getMetaDescription()
    {
        return $this->params['meta_description'];
    }

    public function getNavPosition()
    {
        return $this->params['nav_position'];
    }

    public function getSidebarPosition()
    {
        return $this->params['sidebar_position'];
    }

    public function getFooterBehavior()
    {
        return $this->params['footer_behavior'];
    }


    public function offsetSet($key, $value)
    {
        $this->properties[$key] = $value;
    }


    /**
     * Implementation of ArrayAccess:offsetGet()
     *
     * @param  mixed $key Key to retrieve value of
     * @return mixed      Value of given key
     */
    public function offsetGet($key)
    {
        return $this->params[$key];
    }


    /**
     * Implementation of ArrayAccess:offsetUnset()
     *
     * @param mixed $key Key to unset
     */
    public function offsetUnset($key)
    {
        unset($this->params[$key]);
    }


    /**
     * Implementation of ArrayAccess:offsetExists()
     *
     * @param  mixed $key Key to check for
     * @return bool       Whether it's set or not
     */
    public function offsetExists($key)
    {
        return isset($this->params[$key]);
    }
}