<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);

/**

 * $decoded[5]: image repository. currently: 'stock-images'
 */

// TODO: Update path to correct directory in srwd. Currently set to local directories. ( Actual srwd path: /srwd/www/assets/images/stock-images/ ... )


$copy_from = $decoded[1]; // Current file

/**
 * Local path to account buildkit
 * $decoded[0] = account-name (site-context)
 * $decoded[2] = image filename
 */
$copy_to = '../../' . $decoded[0] . '/www/assets/uploads/images/' . $decoded[2] . '.jpg';
copy($copy_from, $copy_to);


