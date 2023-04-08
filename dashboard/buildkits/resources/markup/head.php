<?php
$buildkit = 'v11.0.0';
// member_name

// If you are using an sds template, enter the template name here.  Example: sds-1
$template   = false;
$site_template = 'psds';
$helpers_php = 'helpers.php';
$global_css  = "global-v6.1.0.min.css";
$global_js = "global-5.2.0.min.js";
$vendor     = '//srwd.sesamehub.com/assets/v5.0/'; // The global assets location (with compatible version number).
$template   = ($template != false) ? trim($template, '/') . '/' : ''; // Converts the chosen template to a directory if a template is set.
$fontawesome = "fontawesome-pro-6.2.0-web";

define('SITEDIR', dirname(__FILE__));

// Load the custom PHP functions for RWD builds
//if (file_exists(dirname(__FILE__) . '/../../srwd/www/assets/v5.0/' . $helpers_php;)) {
include dirname(__FILE__) . '/../../srwd/www/assets/v5.0/' . $helpers_php;
//}
// include 'assets/includes/301.php';

?><!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<title><?php echo $page['title']; ?></title>
<meta name="description" content="<?php echo $page['meta_description']; ?>">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, user-scalable=5">
<meta name="format-detection" content="telephone=no">
<!--[if IEMobile]> <meta http-equiv="cleartype" content="on"> <![endif]-->

<?php include 'assets/includes/parseblogpage.php'; ?>

<?php /* ======================================== 
	Standard desktop and mobile favicons             
 ============================================ */ ?>
	<link rel="alternate icon" href="/assets/images/icons/favicon.png">

<?php /* ======================================== 
	preconnections to required resources            
 ============================================ */ ?>
	<link rel="preconnect" href="//srwd.sesamehub.com" crossorigin>
<!-- 	<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin> -->
<!-- 	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->

<?php /* ======================================== 
	CSS Stylings (Default Base Stylings and Site Specific)            
 ============================================ */ ?>
	<link rel="stylesheet" href="//srwd.sesamehub.com/assets/v6.0/<?php echo $global_css; ?>">
	<link rel="stylesheet" href="/assets/css/local.css">

<?php /* ======================================== 
	preloading above the fold resources || fonts then images           
 ============================================ */ ?>
 
 	<?php /* PRELOAD ICON FONTS */?>
	<link rel="preload" as="font" type="font/woff2" href="//srwd.sesamehub.com/assets/fonts/<?php echo $fontawesome; ?>/webfonts/fa-brands-400.woff2" crossorigin> 
	<link rel="preload" as="font" type="font/woff2" href="//srwd.sesamehub.com/assets/icons/healthgrades/healthgrades2.woff?su2p3g" crossorigin><?php //comment out if !hg ?>
	
	<?php /* PRELOAD LOCALLY HOSTED GOOGLE FONTS */?>
	<!-- <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/lato-v17-latin-300.woff2" crossorigin> -->

	<?php /* PRELOAD FIRST SLIDE OR VIDEO POSTER and HERO BANNER FOR SUBPAGES */?>
	<?php if (is_homepage()): ?>
		<link rel="preload" as="image" href="/assets/images/slideshow/slide1.jpg"><?php /* change to poster.jpg if slideshow is video */ ?>
	<?php else: ?>
		<?php /* preload hero banner here for subpages */ ?>
	<?php endif ?>


<?php /* ========================================
	GA Code
 ============================================ */ ?>
<?php if (!empty($gacode) && $gacode !== 'UA-XXXXXXXXX') { ?>
	 <script>
	 window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	 ga('create', '<?php echo $gacode; ?>', 'auto');
	 ga('send', 'pageview');
	 </script>
	 <script async src='https://www.google-analytics.com/analytics.js'></script>
 <?php } ?>
</head>