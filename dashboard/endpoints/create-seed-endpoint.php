<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$src = dirname(__FILE__) . '/../buildkits/psds-buildkit'; // used to be psds-buildkit1 ????
$dst = dirname(__FILE__) . '/../../' . $decoded['siteSeed'];
$dst = str_replace('"', '', $dst);

// create site folder with stock psds-buildkit contents.
function recurse_copy($src, $dst)
{
    $dir = opendir($src);
    rmdir($dst);
    @mkdir($dst);
    while (false !== ($file = readdir($dir))) {
        if (($file != '.') && ($file != '..')) {

            if (is_dir($src . '/' . $file)) {
                recurse_copy($src . '/' . $file, $dst . '/' . $file);
            } else {
                copy($src . '/' . $file, $dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

recurse_copy($src, $dst);
