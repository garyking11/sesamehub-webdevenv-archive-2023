<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$ratio_directory = json_decode($data, true);
require ("get-image-manager-ratios.php");

/**
 * Get ratio directories contents ( braces, adults etc. )
 */
echo json_encode ( getRatioDirectories( $ratio_directory ) );