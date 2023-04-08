<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$local_dir = dirname(__FILE__) .'/../data/image-manager-data.json';
$local_dir = str_replace('"', '', $local_dir);
/**
 * Write to /dashboard/data/image-manager-data.json
 */
file_put_contents($local_dir, $data);

