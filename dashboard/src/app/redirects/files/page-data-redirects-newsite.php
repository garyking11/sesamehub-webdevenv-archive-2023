<?php
$contents = file_get_contents(dirname(__FILE__) . '/page-data-redirects-newsite.json');

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

echo $contents;
