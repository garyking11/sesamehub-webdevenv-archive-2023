<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
require ("get-image-manager-image-files.php");

/**
 * $decoded[0]: ratio, $decoded[1]: category, $decoded[2]: imagerepo
 */
echo json_encode ( getCategoryImages( $decoded[0], $decoded[1], $decoded[2]) );
