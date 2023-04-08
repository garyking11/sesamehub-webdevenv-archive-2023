<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$account = $decoded['account'];
$directory = $decoded['directory'];
echo json_encode ( getAccountSliderImages($decoded) );// Turns into json string

/**
 * @param $decoded
 * @return array
 * Gets slide dropdown selector images
 */
function getAccountSliderImages( $decoded)
{
    $path = '../../' . $decoded[0] . '/www/assets/images/' . $decoded[1] . '/' ;

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
