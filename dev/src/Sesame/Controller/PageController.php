<?php

namespace Sesame\Controller;

/**
 * Copyright (c) 2016 Sesame Communications.
 * Render page content to layout.php
 * All Rights Reserved.
 */

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PageController
{
    public function showAction(Request $request, $page, $site, $sitename)
    {
        $content = $this->renderContent($request, $page, $site, $sitename);
        $response = Response::create($content);
        $response->prepare($request);

        return $response;
    }

    private function renderContent($requestx, $pagex, $sitex, $sitenamex)
    {
        global $request;
        global $page;
        global $site;
        global $sitename;

        extract([
            'request' => $requestx,
            'page' => $pagex,
            'site' => $sitex,
            'sitename' => $sitenamex
        ]);

        ob_start();
        ob_implicit_flush(0);

        // Load helper functions
        include_once(dirname(__FILE__).'/../Helpers/less_compiler.php');
        include(dirname(__FILE__).'/../Helpers/MemberSiteHelper.php');
        include(dirname(__FILE__).'/../Helpers/Helpers.php');

        // Render template //  !!!!
        include(sprintf(dirname(__FILE__).'/../../../../%s/www/layout.php', $sitename));

        $content = ob_get_contents();
        ob_end_clean();

        $pattern = '#<header>.*</header>#s';
        $content = preg_replace_callback($pattern, function (array $matches) use ($sitename) {
            if (file_exists(sprintf('%s/../../../../%s/.hub-welcome-text', dirname(__FILE__), $sitename))) {
                $welcomeText = file_get_contents(sprintf('%s/../../../../%s/.hub-welcome-text', dirname(__FILE__), $sitename));
            } else {
                $welcomeText = file_get_contents(sprintf('%s/../../../resources/.hub-welcome-text'));
            }
            return sprintf('<header>%s</header>', $welcomeText);
        }, $content);

        $pattern = '#(href|src)="(/|/[^/"][^"]*)"#i';
        $content = preg_replace_callback($pattern, function (array $matches) use($sitename) {
            if (substr($matches[2], 1, 9) == 'dashboard') {
                return $matches[1] . '="' . $matches[2] . '"';
            }

            return $matches[1]. '="/' . $sitename . $matches[2] . '"';
        }, $content);

        /* **** must add chunks manually if they don't show up */
        $content .= '<script src="http://localhost:35729/livereload.js"></script>
        <script type="text/javascript" src="/dashboard/inline.bundle.js"></script>
        <script type="text/javascript" src="/dashboard/vendor.bundle.js"></script>       
        <script type="text/javascript" src="/dashboard/styles.bundle.js"></script>
        <script type="text/javascript" src="/dashboard/common.chunk.js"></script>
        <script type="text/javascript" src="/dashboard/home.module.chunk.js"></script>
        <script type="text/javascript" src="/dashboard/sections.module.chunk.js"></script>
        <script type="text/javascript" src="/dashboard/main.bundle.js"></script>';

        return $content;
    }
}
