<?php

function getImageDirectories( $repo_path, $ratio )
{
    // TODO: This path will need to be refactored
    // TODO: Update exclude file as needed.
    $path = dirname(__FILE__) . '/../../' . $repo_path . '/' . $ratio . '/' ;
    //echo $repo_path;
    /*echo $path;
    //$path = realpath('/etc');

    $objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
    foreach($objects as $name => $object){
        echo "$name\n" . 'test';
    }

    return $objects;*/
    $dirs = array();
    $exclude = array('.git', '.', '..', '.idea', 'assets', 'dashboard', 'dev', 'wamplangues', 'wampthemes', 'node_modules', 'srwd', 'OSX-docs', 'PC-docs', 'docs' );
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