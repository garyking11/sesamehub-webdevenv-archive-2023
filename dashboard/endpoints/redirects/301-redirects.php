<?php
/**
 * Get previous site urls
 */
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
// Domain name from redirects.service.ts
$previous_domain_name = $decoded['previousdomainname'];

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $previous_domain_name);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_CAINFO, dirname(__FILE__).'/../cacert.pem');
$old_site_url = curl_exec($curl);
curl_close($curl);

// Define excluded urls
require_once dirname(__FILE__) . '/excluded-redirect-urls.php';
// Remove hostname from url
$remove_hostname = str_replace($previous_domain_name, '', $old_site_url);
$html = substr($remove_hostname, 0, -1);

// Extract old site links
$dom = new DOMDocument();
@$dom->loadHTML($html);
$xpath = new DOMXPath($dom);
$anchors = $xpath->evaluate("/html/body//a");
$old_value =[];

for ($i = 0; $i < $anchors->length; $i++) {

    $href = $anchors->item($i);

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

$redirect_data = json_encode($old_value);

echo $redirect_data;

?>