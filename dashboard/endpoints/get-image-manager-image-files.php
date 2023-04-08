<?php

/**
 * Get images for specified category
 * @param $ratio
 * @param $category
 * @return array
 * actual srwd path: /srwd/www/assets/images/stock-images
 */

// TODO: Update path to correct directory in srwd. Currently set to local directories
// TODO: Update $exclude directory array

function getCategoryImages( $ratio, $category, $imagerepo )
{
    // dirname(__FILE__) . '/../../' . $imagerepo . '/' . $ratio . '/' . $category . '/' ;
    $path = dirname(__FILE__) . '/../../' . $imagerepo . '/' . $ratio . '/' . $category . '/' ;

    $img_files = array();
    $exclude = array('.', '..', 'library-pages.html', 'temp' );
    if (is_dir($path)){
        if ($dh = opendir($path)){
            while (($file = readdir($dh)) !== false){
                if(is_dir($path)){
                    if (!in_array($file, $exclude)) {
                        $img_files[] = $file;
                    }
                }
            }

            closedir($dh);
        }
    }

    return $img_files;
}
