	<!-- CSS Stylings (Default Base Stylings and Site Specific) -->
	<!-- <link rel="preload" href="_GOOGLE_FONTS_URL_GOES_HERE_" as="style" onload="this.onload=null;this.rel='stylesheet'"> -->
	<link rel="preload" href="//srwd.sesamehub.com/assets/fonts/<?php echo $fontawesome; ?>/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<?php if (is_homepage()) { ?>
	<!-- <link rel="preload" href="/assets/css/animate4.0.0.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'"> -->
	<?php } ?>
	
	<noscript>
	<!-- <link rel="stylesheet" href="_GOOGLE_FONTS_URL_GOES_HERE_" > -->
		<link rel="stylesheet" href="//srwd.sesamehub.com/assets/fonts/<?php echo $fontawesome; ?>/css/all.min.css">
		<?php if (is_homepage()) { ?>
	<!-- <link rel="stylesheet" href="/assets/css/animate4.0.0.min.css"> -->
		<?php } ?>
	</noscript>
	
	<script src="/assets/js/aggregate.js"></script>
	<script src="<?php echo $vendor . $global_js; ?>"></script>
	<script defer src="/assets/js/local.js"></script>
	
	<script>
		jQuery(document).ready(function() {
			var windowWidth = window.innerWidth;
			
			//main-nav function
			<?php if ($mainnavstyle !== 'fullmob'): ?>
				$('#main-nav').responsiveNav({trigger: '[id]'});
			<?php else: ?>
				$('#main-nav').responsiveNav({trigger: '[id]', breakpointMax: 10946});
			<?php endif ?>
			
			<?php if (is_homepage()): ?>
			
				// VIDEO SLIDESHOW CODE 
				//const welcomevid = $('.welcomevid');
				//const smallvid = '<source type="video/mp4" src="/assets/video/welcome-small.mp4" />';
				//const largevid = '<source type="video/mp4" src="/assets/video/welcome.mp4" />';
				//const vidsrc = (windowWidth > 1023) ? welcomevid.append(largevid) : welcomevid.append(smallvid);
			
				//remove/add ready class on scroll to allow alternate appearance of HP masthead (and anything inside it)
				$(window).scroll(() => {
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
				const navItems = $('#subnav a').length;
				if (windowWidth > 1023 && navItems > 5) {
				  $('#subnav span:eq(3), #subnav span:eq(6)').replaceWith('<br>');
				}
				
			<?php endif ?>
		
		});
	</script>