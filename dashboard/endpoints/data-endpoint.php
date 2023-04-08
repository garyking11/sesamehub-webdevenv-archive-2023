<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
file_put_contents('/dashboard/data/data.json', $data);

