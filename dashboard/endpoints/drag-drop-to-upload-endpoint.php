<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);

$account = $decoded["account"];
$files = $decoded["files"];
$directory = $decoded["directory"];


foreach ($files as $file) {
    $path = "../../" . $account . "/www/assets/" . $directory . "/" . $file["name"];
    $written = file_put_contents($path, base64_decode($file["data"]));
}