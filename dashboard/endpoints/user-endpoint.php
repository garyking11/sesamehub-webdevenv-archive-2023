<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$local_dir = dirname(__FILE__) . '/../../dashboard/data/user-data.json';
$local_dir = str_replace('"', '', $local_dir);
file_put_contents($local_dir, $data);
