<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$account = $decoded['account'];
$directory = isset($decoded['directory']) ? $decoded['directory'] : 'uploads/images';
echo json_encode ( getAccountLocalImages($account, $directory) );// Turns into json string

function getAccountLocalImages( $account, $directory )
{
    $path = '../../' . $account . '/www/assets/' . $directory . '/';

    $local_img_files = array();
    $exclude = array('.', '..', '.DS_Store');
    if (is_dir($path)){
        if ($dh = opendir($path)){
            while (($file = readdir($dh)) !== false){
                if(is_dir($path)){
                    if (!in_array($file, $exclude)) {
                        $local_img_files[] = $file;
                    }
                }
            }

            closedir($dh);
        }
    }

    return $local_img_files;
}