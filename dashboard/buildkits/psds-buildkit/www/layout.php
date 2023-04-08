<?php 

/* =============================================== */

/* options */
$mainnavstyle = "standard"; 
$tagline = "";
$gacode = "UA_XXXXXXXXX_X";

/* =============================================== */

 ?>
<?php
$buildkit = 'v10.0.0';
// member_name

// If you are using an sds template, enter the template name here.  Example: sds-1
$template   = false;
$site_template = 'psds';
$helpers_php = 'helpers.php';
$global_css  = "global-v6.1.0.min.css";
$global_js = "global-5.1.0.min.js";
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
<!--[if lt IE 7]>      <html lang="en" class="lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="ie7 lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="ie8 lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="en" class="ie9 lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->

<head>
<meta charset="utf-8">
<title><?php echo $page['title']; ?></title>
<meta name="description" content="<?php echo $page['meta_description']; ?>">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, user-scalable=0">
<meta name="format-detection" content="telephone=no">
<!--[if IEMobile]> <meta http-equiv="cleartype" content="on"> <![endif]-->

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

<?php /* ======================================== 
	Standard desktop and mobile favicons             
 ============================================ */ ?>
	<!-- <link rel="icon" type="image/svg+xml" href="/assets/images/icons/favicon.svg"> -->
	<link rel="alternate icon" href="/assets/images/icons/favicon.png">
	<!-- <link rel="mask-icon" href="/assets/images/icons/pinned-tab.svg" color="#000"> -->

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
	<link rel="preload" as="font" type="font/woff2" href="//srwd.sesamehub.com/assets/icons/healthgrades/healthgrades2.woff?su2p3g" crossorigin><?php //delete if !hg ?>
	
	<?php /* PRELOAD LOCALLY HOSTED GOOGLE FONTS */?>
	<!-- <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/lato-v17-latin-300.woff2" crossorigin> -->

	<?php /* PRELOAD FIRST SLIDE OR VIDEO POSTER and HERO BANNER FOR SUBPAGES */?>
	<?php if (is_homepage()): ?>
		<link rel="preload" as="image" href="/assets/images/slideshow/slide1.jpg"><?php /* change to poster.jpg if slideshow is video */ ?>
	<?php else: ?>
		<?php /* preload hero banner here for subpages */ ?>
	<?php endif ?>
	

<?php /* ======================================== 
	load fonts for users with no .js             
 ============================================ */ ?>
<noscript>
	<link rel="stylesheet" href="//srwd.sesamehub.com/assets/fonts/<?php echo $fontawesome; ?>/css/all.min.css">
	<!-- add_google_provided_google_fonts_link_here -->
</noscript>

<?php /* ========================================
	GA Code
 ============================================ */ ?>
	<!--
	<script>
	window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	ga('create', '<?php echo $gacode; ?>', 'auto');
	ga('send', 'pageview');
	</script>
	<script async src='https://www.google-analytics.com/analytics.js'></script>
	-->
</head>

<body class="<?php echo $site['layout_classes'] . ' ' . $site_template;?>">

<?php /* ======================================== 
	masthead || use ready class on css for HP header state change              
 ============================================ */ ?>
 
	<?php if (is_homepage()): ?>
		<header id="masthead" class="ready">
	<?php else: ?>
		<header id="masthead">
	<?php endif ?>
		
		
		<div id="hd">
		    <div class="container row">
		
				<div id="logo">
					<a href="/">
						<!-- <img src="/assets/images/logo.png" alt="Logo" width="160" height="57" decoding="async"> -->
						<?php include 'assets/images/logo.svg'; ?>
					</a>
				</div> 
				
				<div id="contactinfo">
					
				    <a class="address" href="#">Seattle_WA</a>
				    <a class="phone" href="tel:000-000-0000">000_000_0000</a>
				    
				</div><!--/contact-info-->
				    
				<div id="utilitynav">
					
					<a class="appointmentrequest" href="#">Appointment Request</a>
					<?php echo custom_navigation(array('Patient Login'), false); ?>
					
				</div>
		
		    </div><!--/container-->
		</div><!--/hd-->
		
		<?php include 'assets/includes/socialmedia.php'; ?>
		
		<nav id="main-nav" class="horizontal clearfix">
			
			<?php if (!$mainnavstyle == 'fullmob') { ?><div class="container row"><?php } ?>
		    
		    <div class="collapsible">
			    <a class="trigger" href="javascript:void(0)" aria-label="Menu">
				    <div class="navicon" aria-hidden="true" role="img"><span></span><span></span><span></span><span></span></div>
				</a>
			    <?php echo navigation(array('Patient Login','Doctor Login', 'Sitemap','Healthgrades')); ?>			
		    </div><!--/collapsible -->
		                
			<?php if (!$mainnavstyle == 'fullmob') { ?></div><!--/container--> <?php } ?>
			             
		</nav><!--/main-nav -->
		
	</header><!--/masthead-->

<?php /* ======================================== 
	#slideshow || choose video or classic slideshow                  
 ============================================ */ ?>
 
<?php if (is_homepage()) { ?>

	<div id="slideshow">
	    
		<!-- <video id="welcomevid" class="welcomevid lazyload" preload="none" autoplay loop muted playsinline data-poster="/assets/images/slideshow/poster.jpg"></video> -->
	    
	    <div id="home-slideshow">
			<?php include 'assets/includes/slideshow.php'; ?>
	    </div><!--/home-slideshow -->
	    
	    <div class="ssoverlay"><?php echo $tagline; ?></div><!--.ssoverlay-->
	    
	</div><!--/slideshow -->

<?php /* ======================================== 
	spotlight                  
 ============================================ */ ?>
 
 	<div class="spotlight top">
	 	
	    <div class="spot01">
		    
	        <a class="first" href="#">
	            <img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
	            <h2 class="topic">topic <span class="trait">one</span></h2>
	        </a><a class="" href="#">
	            <img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
	            <h2 class="topic">topic <span class="trait">two</span></h2>
	        </a><a class="" href="#">
	            <img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
	            <h2 class="topic">topic <span class="trait">three</span></h2>
	        </a><a class="last" href="#">
	            <img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
	            <h2 class="topic">topic <span class="trait">four</span></h2>
	        </a>
	        
	    </div><!--.spot01-->
	
		
		<div class="spot02">
			
				<img class="decoration" src="/assets/images/spotlight/spot00dec.jpg" alt="" width="400" height="400" loading="lazy" decoding="async">
				<div class="mod">
					<h2 class="topic">Meet Dr. Sam Sesame</h2>
					<div class="info">Lorem ipsum dolor sit amet, ut aliquam sed. Quo mundi integre ut, eu vis. Possit fuisset ius an. No nec consul option, iusto ignota cum in. An sea, usu ex minim mollis. Congue omittam quo ne, malorum vel te, te nec partem.</div>
					<a class="spotbtn" href="#">Learn More</a>
				</div>
			
		</div><!--.spot02-->
		
		<div class="spot03">
			
				<img class="decoration" src="/assets/images/spotlight/spot00dec.jpg" alt="" width="400" height="400" loading="lazy" decoding="async">
				<div class="mod">
					<h2 class="topic">Meet Dr. Sam Sesame</h2>
					<div class="info">Lorem ipsum dolor sit amet, ut aliquam sed. Quo mundi integre ut, eu vis. Possit fuisset ius an. No nec consul option, iusto ignota cum in. An sea, usu ex minim mollis. Congue omittam quo ne, malorum vel te, te nec partem.</div>
					<a class="spotbtn" href="#">Learn More</a>
				</div>
			
		</div><!--.spot03-->
		
	</div><!-- .spotlight -->


<?php } ?>

<?php /* ======================================== 
	top oriented #subnav
 ============================================ */ ?>
 
<?php if (!is_homepage()): ?>

	<div id="subnav">
		<div class="container row">
	    
		<?php if(sub_navigation()): ?>
			<?php /* <h2 class="topic"><?php echo $page['section']; ?></h2> */ ?>
		    <nav><?php echo text_sub_navigation('',$seperator='<span class="divider"> | </span>',''); ?></nav>
	    <?php endif; ?>
	           
	    </div><!--/container-->
	</div><!--/subnav-->
	
<?php endif; ?>


<?php /* ======================================== 
	#bd                  
 ============================================ */ ?>
 
	<div id="bd" <?php if (!is_homepage()): ?>class="sub"<?php endif; ?>>
	    <div class="container row">
	
	<?php if (!is_homepage()): ?>
	
		<?php
			/*  UNCOMMENT FOR subpage H1 that appears above sidebar AND content area */  
			/*  or can be moved above top oriented #SUBNAV if the proof requires it  */ 
		?>
		<?php /* <header class="sub"><h1 class="sub"><?php echo $page['headline']; ?></h1></header> */ ?>
	
		<?php /* ======================================== 
			#sidebar                  
		 ============================================ */ ?>
		 
		<div id="sidebar">
			
			<?php /*  UNCOMMENT FOR SIDE ORIENTED #SUBNAV
			<?php if(sub_navigation()): ?>
			<nav id="subnav">
				<h2 class="topic"><?php echo $page['section']; ?></h2>
			    <nav><?php echo text_sub_navigation('',$seperator='',''); ?></nav>
			</nav><!--/subnav-->	
			 <?php endif; ?>
			*/ ?>
			
			<div id="hide-stock">
				<?php place_image('','','stock'); ?>
			</div>
			
			<?php if (is_blog()): ?>
				<?php include 'assets/includes/sharethiswidget.php'; ?>
			<?php endif; ?>
			
		
		</div><!--/sidebar-->
	<?php endif; ?>
	
			<?php /* ======================================== 
				#content                  
			 ============================================ */ ?>
			 
			<main id="content">
				
				<?php if (is_homepage()): ?>
					<header>
						<?php /* adjust PHP regular expressions (preg_replace) as needed per psd proof for correctly styled phrases */ ?>
						<h1><?php
						    $page['headline'] = preg_replace("/(Welcome to)/i", "<span class='trait top'>$1</span>", $page['headline']);
						    $page['headline'] = preg_replace("/(Orthodontics)/i", "<span class='trait bottom'>$1</span>", $page['headline']);
						    echo $page['headline'];
						?></h1>
					</header>
				<?php else: ?>
					<header class="sub">
						<h1>
							<?php echo $page['headline']; ?>
						</h1>
					</header>
				<?php endif ?>
			    
				<div class="content-text">
					<?php echo $page['content']; ?>
				</div>
			    <?php //echo $page['after_content']; ?>
			    
			</main><!--/content-->
	    
	    </div><!--/container-->
	</div><!--/bd-->

<?php /* ======================================== 
	spotlight                  
 ============================================ */ ?>
 
<?php if (is_homepage()) { ?>
	<div class="spotlight">
		
	    <div class="spot04">
		    
		    <h2 class="topic">Services</h2>
		    
		    <a class="first" href="#">
				<img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
		        <h3 class="topic">topic <span class="trait">one</span></h3>
		    </a><a class="" href="#">
				<img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
		        <h3 class="topic">topic <span class="trait">two</span></h3>
		    </a><a class="last" href="#">
				<img class="decoration" src="/assets/images/icons/sesameicon.svg" alt="" width="40" height="34" loading="lazy" decoding="async">
		        <h3 class="topic">topic <span class="trait">three</span></h3>
		    </a>
	    </div><!--.spot04-->
	    
	    <div class="spot05">
		    
		    <?php include 'assets/includes/tshow.php'; ?>
		    
	    </div><!--.spot05-->
	    
	</div><!--.spotlight-->

<?php /* ======================================== 
	association logos                  
 ============================================ */ ?>
 
	<div class="associationlogos">
		
		<a class="invisalign" href="#"><?php include 'assets/images/footer/coinvisalign.svg'; ?></a>
	<!--<a class="invisalign" href="#"><img src="/assets/images/footer/coinvisalign.png" alt="class_slogan" width="190" height="51" loading="lazy" decoding="async"></a>-->
	
	</div><!--associationlogos-->


<?php } ?>

<?php /* ======================================== 
	#ft                  
 ============================================ */ ?>
 	<?php /*  
	 	LAZYLOAD PROCEDURE:
	 	when site is uploaded 'xlazyload' must be changed to 'lazyload'  
 	*/ ?>
	<div id="ft" class="row xlazyload" data-bg="/assets/images/footer/map.png">
		
		<?php /*  UNCOMMENT FOR #ft textnav  */ ?>
		<?php /*  <nav id="textnav"><?php echo text_navigation('', $exclusions=array('Patient Login'), '<span class="divider">&nbsp;</span>'); ?></nav> */ ?>
	        
		<div id="location">
			
			<div class="mod">
				
				<a class="logo" href="/">
					<!-- <img src="/assets/images/footer/logo.png" alt="" width="160" height="57" loading="lazy" decoding="async"> -->
					<?php include 'assets/images/logo.svg'; ?>
				</a>
				
				<a class="phone" href="tel:000-000-0000">000_000_0000</a>
								
			    <a class="address" href="#">
					<!-- choose FA or svg -->
					<?php /* <?php include 'assets/images/footer/marker.svg'; ?> */ ?>
					<div class="marker fas fa-map-marker-alt" aria-hidden="true" role="img"></div>
					
				    <div class="street">address</div>
			    </a>
			    
			    <div class="officehours">
				    <div class="days">Mon_Fri</div><div class="hours">Closed</div>
			    </div><!-- .officehours -->
			    
			</div><!-- .mod -->
			
		</div><!--/locations-->
	
	</div><!--/ft-->

<?php /* ======================================== 
	links                  
 ============================================ */ ?> 
    
	<footer id="links">
		
	    <div class="container row">
	
			<div class="util">          
			    <a id="sesame-link" class="sesame-link" href="https://www.sesamecommunications.com/web-design/">
				    <?php include 'assets/images/icons/sesameicon.svg'; ?>Website Powered by Sesame 24-7<sup>&trade;</sup>
				</a>
				
			    <span class="divider">|</span>
			    
			    <a class="sitemap" href="/sitemap">Site Map</a>
			</div><!--.util-->
			    
			<div id="btt">
				
				<?php /*  UNCOMMENT BELOW FOR FA icon based backtotop  */ ?>
				<?php /*  <a id="backtotop" href="#hd" aria-label="Back to Top"><span class="icon fa-solid fa-chevron-up" aria-hidden="true" role="img" ></span></a>  */ ?>
				<a id="backtotop" href="#hd">Back to Top</a>
			</div>
	    
	    </div><!--/container-->
	    
	</footer>

<!-- CSS Stylings (Default Base Stylings and Site Specific) -->

	<script>// deferred below the fold font stylesheets prevent blocking the rendering of the page
		/* G FONTS */
		/*
		var gcss = document.createElement('link');
		gcss.rel = 'stylesheet';
		gcss.href = '_GOOGLE_FONTS_URL_GOES_HERE_';
		var gdefer = document.getElementsByTagName('link')[0];
		gdefer.parentNode.insertBefore(gcss, gdefer);
		*/
		
		/* FA icons */
		var facss = document.createElement('link');
		facss.rel = 'stylesheet';
		facss.href = '//srwd.sesamehub.com/assets/fonts/fontawesome-pro-6.1.1-web/css/all.min.css';
		var fadefer = document.getElementsByTagName('link')[0];
		fadefer.parentNode.insertBefore(facss, fadefer);
		
		/* animate4 */
		/*
		var animcss = document.createElement('link');
		animcss.rel = 'stylesheet';
		animcss.href = '/assets/css/animate4.0.0.min.css';
		var animdefer = document.getElementsByTagName('link')[0];
		animdefer.parentNode.insertBefore(animcss, animdefer);
		*/
	</script>
	
	<script src="/assets/js/aggregate.js"></script>
	<script src="<?php echo $vendor . $global_js; ?>"></script>
	<script src="/assets/js/local.js"></script>
	
	<script>
		jQuery(document).ready(function() {
			var windowWidth = window.innerWidth;
			
			<?php if ($mainnavstyle == 'standard'): ?>
				$('#main-nav').responsiveNav();
			<?php else: ?>
				$('#main-nav').responsiveNav({breakpointMax: 10946});
			<?php endif ?>

			
			<?php if (is_homepage()): ?>
			
				// VIDEO SLIDESHOW CODE 
				//var welcomevid = $('.welcomevid');
				//var smallvid = "<source type='video/mp4' src='/assets/video/welcome-small.mp4' />";
				//var largevid = "<source type='video/mp4' src='/assets/video/welcome.mp4' />";
				//var vidsrc = (windowWidth > 1023) ? welcomevid.append(largevid) : welcomevid.append(smallvid);
			
				//remove/add ready class on scroll to allow alternate appearance of HP masthead (and anything inside it)
				$(window).scroll(function() {
					if ($(document).scrollTop() > 100) {
						$('#masthead').removeClass('ready');
					} else {
						$('#masthead').addClass('ready');
					}
				});
				
			<?php else: ?>
				
				//SIDE ORIENTED #SUBNAV USUALLY || hide hide-stock - can be handy if other elements in hide-stock as well
				/*
				if(!$('img.stock').length) {
					$('#hide-stock').hide();
				}
				*/
				
				// TOP ORIENTED SUBNAV ONLY || makes line breaks on #subnav for desktop adjust span:eq(#) below as needed 
				var navItems = $('#subnav a').length;
				if((windowWidth > '1023') && (navItems > 5)){ $('#subnav span:eq(3), #subnav span:eq(6)').replaceWith('<br>'); }
				
			<?php endif ?>
		
		});
	</script>

</body>
</html>
