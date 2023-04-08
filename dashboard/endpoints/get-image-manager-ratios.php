<?php

/**
 * @param $ratio_directory
 * @return array
 */

// TODO: Update path to '/srwd/www/assets/images/stock-images/' . $ratio_directory . '/'
// TODO: Update $exclude array as needed.

function getRatioDirectories( $ratio_directory )
{
    $path = dirname(__FILE__) . '/../../'. $ratio_directory . '/' ;

    $dirs = array();
    $exclude = array('.git', '.', '..', '.idea', 'assets', 'dashboard', 'dev', 'wamplangues', 'wampthemes', 'node_modules', 'srwd', 'OSX-docs', 'PC-docs', 'docs', 'temp' );
    if (is_dir($path)){
        if ($dh = opendir($path)){
            while (($file = readdir($dh)) !== false){
                if(is_dir($path."/".$file)){
                    if (!in_array($file, $exclude)) {
                        $dirs[] = $file;
                    }
                }
            }

            closedir($dh);
        }
    }
    return $dirs;
}