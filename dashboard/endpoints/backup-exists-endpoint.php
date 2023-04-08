<?php

/**
 * @return array
 */
function getBackupList()
{
    $path = dirname(__FILE__) . '/../../archives';

    $dirs = array();

    if (is_dir($path)) {
        if ($dh = opendir($path)) {

            while (false !== ($file = readdir($dh))) {

                if ($file != "." && $file != "..") {

                    if (is_dir($path . "/")) {

                        $dirs[] = $file;

                    }
                }
            }

            closedir($dh);
        }
    }


    return $dirs;
}

echo json_encode(getBackupList());

