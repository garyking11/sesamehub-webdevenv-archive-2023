<?php
/**
 * @return array
 */
function getbuildkitDirectories()
{
// get /dashboard/builkdits/resources/less/* correct!!
    $path = dirname(__FILE__) . '/../buildkits/resources/less/';
// echo $path;
    $dirs = array();

    $exclude = array('.git', '.', '..', '.idea', 'tasks', 'assets', 'MAMP', 'dashboard', 'dev', 'wamplangues', 'wampthemes', 'node_modules', 'srwd', 'OSX-docs', 'PC-docs', 'docs', 'stock-images', 'archives' );

    if (is_dir($path)){
        if ($dh = opendir($path)){

            while (($file = readdir($dh)) !== false){

                echo $file;

                if(is_dir($path."/".$file)){
                    if (!in_array($file, $exclude)) {
                        $dirs[] = $file;
                    }
                } // services-three-horizontal.less
            }
            closedir($dh);
        }
    }

    return $dirs;
}