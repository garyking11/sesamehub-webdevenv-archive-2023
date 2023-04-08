<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
require ("get-buildkit-resources-dirs.php");
echo json_encode (getbuildkitDirectories());
