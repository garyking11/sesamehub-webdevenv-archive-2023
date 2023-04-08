<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$local_dir = dirname(__FILE__) . '/../../' . $decoded['account'] . '/www/assets/includes/data/sections-data.json';
$local_dir = str_replace('"', '', $local_dir);

$site_context = file_get_contents(dirname(__FILE__) . '/../data/site-context.json');
$account_name = json_decode($site_context, true);

$local_buildkit = dirname(__FILE__) . '/../../' . $account_name['account'] . '/www';//
$source_buildkit_directory = dirname(__FILE__) . '/../' . 'buildkits/psds-buildkit/www';

/**
 * @param $src
 * @param $dst
 * Copies from psds-buildkit1 concated components to current account-name buildkit
 * Will overwrite current directory
 */
function copy_directory($src, $dst)
{

    $dir = opendir($src);
    rmdir($dst);
    @mkdir($dst);
    while (($file = readdir($dir))) {
        if (($file != '.') && ($file != '..')) {
            if (is_dir($src . '/' . $file)) {
                copy_directory($src . '/' . $file, $dst . '/' . $file);
            } else {
                copy($src . '/' . $file, $dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

copy_directory($source_buildkit_directory, $local_buildkit);
file_put_contents(dirname(__FILE__) . '/../data/markup-data.json', $data);

/**
 * Copy to local account-name
 */
$local_buildkit = dirname(__FILE__) . '/../../' . $decoded['account']
    . '/www/assets/includes/data/sections-data.json';
$local_buildkit = str_replace('"', '', $local_dir);
file_put_contents($local_dir, $data);

// date created
$date = date('F Y');
// copyright date
$copyright_date = date('Y');
// get hero data
$hero_style = null;

foreach ($decoded['formData'] as $fd) {
    if ($fd['slideshow_layout_style'] == '' || $fd['slideshow_layout_style'] == null) {
        $hero_style = 'none';
    } else {
        $hero_style = $fd['slideshow_layout_style'];
    }
}

/**
 * Write navOptions and subnavOptions to
 */
// path to markup-config.php
$path_to_markup_config = dirname(__FILE__)
    . '/../buildkits/resources/config/markup-config.php';

// path to css-config.less
$path_to_css_config = dirname(__FILE__)
    . '/../buildkits/resources/config/css-config.less';

// tagline
if($decoded['tagline'] == ''){
    $tag_line = 'Smiles for a <span class="trait">lifetime </span>';
} else {
    $tag_line = $decoded['tagline'];
}

// gacode
if($decoded['gacode'] == ''){
    $ga_code = 'UA-XXXXXXXXX';
} else {
    $ga_code = $decoded['gacode'];
}

$markup_config_options =
    '<?php ' . "\n" .
    '/* ' . "\n" .
    ' Site Manager Version: ' . $decoded['sm_version'] . "\n" .
    ' Date Created: ' . $date . "\n" .
    ' Account: ' . $decoded['account'] . "\n" .
    ' Written by: ' . $account_name['builder'] . "\n" .
    ' Sesame Communications -' . ' All rights reserved. ' . 'C'. $copyright_date .  "\n" .
    ' Any reproduction or intentional misuse is strictly prohibited' . "\n" . '*/' . "\n" .


    '/* =============================================== */' . "\n" . "\n" .
    '/* options */' . "\n" .
    '$mainnavstyle = ' . '"' . $decoded['navOptions'] . '"' . '; ' . "\n" .
//    '$subnavorientation = ' . '"' . $decoded['subnavOptions'] . '"' . ';' . "\n" .
//    '$slideshowstyle = ' . '"' . $hero_style . '"' . ';' . "\n" .
    '$tagline = ' . '"' . str_replace('"', "'", $tag_line) . '"' . ';' . "\n" .
    '$gacode = ' . '"' . $ga_code . '"' . ';' . "\n" .

    '/* =============================================== */' . "\n" . "\n" . "\n" .
    ' ?>';

// mainnavstyle

$css_config_options =
    '/* ' . "\n" .
    ' Site Manager Version: ' . $decoded['sm_version'] . "\n" .
    ' Date Created: ' . $date . "\n" .
    ' Account: ' . $decoded['account'] . "\n" .
    ' Written by: ' . $account_name['builder'] . "\n" .
    ' Sesame Communications -' . ' All rights reserved. ' . 'C'.$copyright_date .  "\n" .
    ' Any reproduction or intentional misuse is strictly prohibited' . "\n" . '*/' . "\n" .

    '/* ===============================================' . "\n" .
    '              options' . "\n" .
    ' =============================================== */' . "\n" .
    '@mainnavstyle: ' . '"' . $decoded['navOptions'] . '"' . '; ' . "\n" .
//    '@subnavorientation: ' . '"' . $decoded['subnavOptions'] . '"' . ';' . "\n" .
//    '@slideshowstyle: ' . '"' . $hero_style . '"' . ';' . "\n" .

    '/* ===============================================' . "\n" .
    '                    colors' . "\n" .
    ' =============================================== */' . "\n" .

    '@color0: ' . '#' . str_replace('#', '', '0099CC') . '; ' . "\n" .
    '@color1: ' . '#' . str_replace('#', '', 'b9d233') . ';';

file_put_contents($path_to_markup_config, $markup_config_options);
file_put_contents($path_to_css_config, $css_config_options);



