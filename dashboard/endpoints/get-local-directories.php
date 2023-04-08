<?php

/**
 * @return array
 */
function getLocalDirectories()
{
    $path = dirname(__FILE__) . '/../../';

    $dirs = array();

    $exclude = array('.git', '.', '..', '.idea', 'assets', 'tasks', 'dashboard', 'dev',
        'wamplangues', 'wampthemes', 'node_modules', 'srwd', 'OSX-docs',
        'PC-docs', 'docs', 'stock-images', 'archives', 'www', 'local' );

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

