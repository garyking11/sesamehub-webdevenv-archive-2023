<?php

if( file_exists (dirname(__FILE__) . '/301.class.php' ))
{
    require_once dirname(__FILE__) . '/301.class.php';

    $redirectJSON = $redirected->get_page_data_redirects();

    // Remember to add preceding forward slash
    // "original-page1" => "redirected page1",
    // "original-page2" => "redirected page2"
    $additional_redirects = array(
        // add redirects here
    );

    $redirect_merge =  array_unique(array_merge($additional_redirects, $redirectJSON));

    if(array_key_exists($_SERVER['REQUEST_URI'], $redirect_merge) &&
        $_SERVER['REQUEST_URI'] !== $redirect_merge[$_SERVER['REQUEST_URI']]) {
        Header("HTTP/1.1 301 Moved Permanently");
        Header("Location: " . $redirect_merge[$_SERVER['REQUEST_URI']]);
        exit;
    }

} else {
    return true;
}