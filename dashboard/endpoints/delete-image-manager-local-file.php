<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
//echo $decoded[0] . $decoded[1];
$account = $decoded['account'];
$directory = $decoded['directory'];
$fileToDelete = $decoded['fileToDelete'];
$delete_path = '../../' . $account . '/www/assets/' . $directory . '/' . $fileToDelete;

unlink($delete_path);