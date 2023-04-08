<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');

$decoded = json_decode($data, true);
$site_context = file_get_contents(dirname(__FILE__) . '/../data/site-context.json');
$account_name = json_decode($site_context, true);

$local_dir = dirname(__FILE__) . '/../../' . $account_name['account'] . '/www/assets/includes/data/builder-data.json';
$filepath = __DIR__ . '/../data/builder-data.json';
$filepath1 = __DIR__ . '/../../../data/builder-data.json';

// write to dashboard/data/builder-data.json
file_put_contents($filepath, $data);
// write to MAMP/data/builder-data.json
file_put_contents($filepath1, $data);
// write to local file
file_put_contents($local_dir, $data);


