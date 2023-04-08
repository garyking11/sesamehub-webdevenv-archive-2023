<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$domain_url = json_decode($data, true);

/**
 * Check if site exists and is available
 * NOT WORKING YET!
 */

$domain = $domain_url;
if ( gethostbyname($domain) != $domain ) {
    echo "DNS Record found: " .  $domain .  "\n" ;
}
else {
    echo "NO DNS Record found!".  "\n";
}

$host = $domain;
if($socket =@ fsockopen($host, 80, $errno, $errstr, 30)) {
    echo 'online!'.  "\n";
    fclose($socket);
} else {
    echo 'offline.'.  "\n";
}
