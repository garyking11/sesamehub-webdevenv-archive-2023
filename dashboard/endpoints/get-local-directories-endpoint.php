<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
require ("get-local-directories.php");
echo json_encode (getLocalDirectories());
