<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
require ("get-image-manager-image-files.php");
echo json_encode ( getSelectedImages() );