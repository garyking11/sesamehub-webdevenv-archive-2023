<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

function liveDir()
{
    $live = (strpos($_SERVER['HTTP_HOST'], 'localhost') === false) ? true : false; // Checks if live site
    if (!$live) {
        // Generate the local .less stylesheet
        include dirname(__FILE__) . '/../../../../dev/src/Sesame/Helpers/Helpers.php';
        generate_stylesheets(dirname(__FILE__) . '/');
    } else {
        // Do not generate the local .less stylesheet
        $helpers_php = 'helpers-v2.0.0.php';
        include dirname(__FILE__) . '/../../../../srwd/www/assets/v5.0/' . $helpers_php;
    }
}

liveDir();
