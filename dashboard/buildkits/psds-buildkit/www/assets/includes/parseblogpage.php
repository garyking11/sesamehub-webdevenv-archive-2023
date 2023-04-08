<?php
if(is_blog())
{
# Parse the URL
$URI = $_SERVER['REQUEST_URI'];
$is_tag = strpos($URI,"/blog/tag/") !== false;
$is_category = strpos($URI,"/blog/category/") !== false;
$is_paginated_index = strpos($URI,"/blog/page/") !== false;
$base_url = 'https://' . $_SERVER['HTTP_HOST']; # Blog won't have https enabled.

$robots_index = $page['slug'] != 'search-results' && !$is_tag && !$is_category ? 'index,follow' : 'noindex';
$canonical_href = $robots_index == 'index,follow' && !$is_paginated_index ? $base_url . $URI : $base_url . '/blog/';

echo '<meta name="robots" content="'.$robots_index.'" />';
echo '<link rel="canonical" href="'.$canonical_href.'" />';
}
?>