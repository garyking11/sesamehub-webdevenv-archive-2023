<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
require ("get-image-manager-directories.php");

/**
 * $decoded[0] repo_path, $decoded[1] r ratio
 * Get categories from ratio directory
 */
echo json_encode ( getImageDirectories( $decoded[0], $decoded[1] ) );