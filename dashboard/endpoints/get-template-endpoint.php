<?php
header("Access-Control-Allow-Origin: *");
//$data = file_get_contents("../../" . account .'/layout.php', true);
header('Content-Type: application/json');

// Get site-context from site-context-provider.service.ts
$data = file_get_contents("php://input", true);

header('Content-Type: application/json');
$decoded = json_decode($data, true);
$local_dir = dirname(__FILE__) . '/../../'. $decoded['account'] . '/www/assets/includes/data/site-data.json';
$local_dir = str_replace('"', '', $local_dir);

