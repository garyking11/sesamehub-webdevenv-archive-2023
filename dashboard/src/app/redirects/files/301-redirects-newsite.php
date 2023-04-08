<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include dirname(__FILE__) . '/../../page-manager.class.php';
// Get new site domain name
$new_site_url = $page_data->getNewSiteInfo();
// Get Site Manager Version 
$new_site_links = file_get_contents('http://'.$new_site_url.'.sesamehub.com/');
$version =  $page_data->getSMVersionInfo();
 
require_once $_SERVER['DOCUMENT_ROOT'] .'/hub_sites/srwd/www/assets/tools/site_manager-v' . $version . '/includes/excluded-redirect-urls.php';

$new_dom = new DOMDocument();
@$new_dom->loadHTML($new_site_links);
$xpath = new DOMXPath($new_dom);
$new_hrefs = $xpath->evaluate("/html/body//a");

for ($u = 0; $u < $new_hrefs->length; $u++) {

    $new_href = $new_hrefs->item($u);

    $remove_trail_slash = rtrim($new_href->getAttribute('href'), '/\\');
    $new_url = $remove_trail_slash .= ',';

    // add forward slash if not exists 
    if (substr($new_url, 0, 1) !== '/') {
        $new_url = '/' . $new_url;
    }

    $newsite = array_unique(array_filter(explode(',', $new_url)));

    foreach ($newsite as $key => $value) {

        if (!in_array($value, $excluded_urls)) {

            if (strpos($value, 'http') === false
                && strpos($value, 'tel') === false) {

                unset($newsite[$key]);

                $new_value[] = $value;
            }
        }
    }
}

$new_value = array_values(array_unique($new_value));
$objectized = array();

foreach ($new_value as $value) {
    $objectized[] = array("url" => $value);
}

/*$data = array(
      $new_value
);*/

$data = $objectized;


$redirect_new_data = json_encode($data);

echo $redirect_new_data;