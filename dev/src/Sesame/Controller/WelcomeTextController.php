<?php
/**
 * Copyright (c) 2016 Sesame Communications.
 *
 * All Rights Reserved.
 */

namespace Sesame\Controller;

use GuzzleHttp\Client;
use Sesame\Utilities\MetaUtilityWelcomeText;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class WelcomeTextController
{
    public function lookupAction(Request $request, $accountname)
    {
        $url = sprintf('http://%s.sesamehub.com', $accountname);

        $client = new Client();
        $response = $client->get($url);

        $html = (string) $response->getBody();

        $response = Response::create($html);
        $response->prepare($request);

        return $response;
    }

    /**
     * @param Request $request
     * @param $accountname
     * @return Response
     *
     */
    public function updateAction(Request $request, $accountname)
    {
        $body = $request->getContent();
        $metaWel = new MetaUtilityWelcomeText();
        $metaWel->write($accountname, $body);

        return Response::create('', Response::HTTP_NO_CONTENT);
    }

    public function deleteAction($accountname)
    {
        $meta = new MetaUtilityWelcomeText();
        $meta->delete($accountname);

        return Response::create('', Response::HTTP_NO_CONTENT);
    }
}
