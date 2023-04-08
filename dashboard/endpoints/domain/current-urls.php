<?php

/**
 * Get current domain urls
 */
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$domain_url = json_decode($data, true);

$domain = preg_replace('#^https?://#', '', $domain_url);

// http:// or https://
$domainname = $domain_url;

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $domainname);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_CAINFO, dirname(__FILE__).'/../cacert.pem');
$old_site_url = curl_exec($curl);
curl_close($curl);

// Excluded domains
require_once dirname(__FILE__) . '/../redirects/excluded-redirect-urls.php';
// Remove hostname from url
$remove_hostname = str_replace($domainname, '', $old_site_url);
$html = substr($remove_hostname, 0, -1);

// Extract old site links
$dom = new DOMDocument();
@$dom->loadHTML($html);
$xpath = new DOMXPath($dom);
$hrefs = $xpath->evaluate("/html/body//a");
$old_value =[];

for ($i = 0; $i < $hrefs->length; $i++) {

    $href = $hrefs->item($i);

    // Create an array
    $oldsite = array_filter(explode(',', $href->getAttribute('href')));

    foreach ($oldsite as $key => $value) {

        if (!in_array($value, $excluded_urls)) {

            if (strpos($value, 'http') === false
                && strpos($value, 'tel') === false
            ) {

                unset($oldsite[$key]);

                if (substr($value, 0, 1) !== '/') {
                    $value = '/' . $value;

                }
                $old_value[] = $value;
            }
        }
    }
}

$old_value = array_values(array_unique($old_value));
// array
$redirect_data = json_encode($old_value);

echo $redirect_data;
?>