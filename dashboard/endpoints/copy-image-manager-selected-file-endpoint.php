<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$copy_from = '../../images-stock/' . $decoded[0] . '/' . $decoded[1] . '/' . $decoded[2];
$copy_to = '../../images-stock/temp/' . $decoded[2];
copy($copy_from, $copy_to);