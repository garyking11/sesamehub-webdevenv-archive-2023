<?php /* ======================================== 
	#slideshow || video                
 ============================================ */ ?> 
<?php if (is_homepage()) { ?>

	<div id="slideshow">
	    
		<video id="welcomevid" class="welcomevid lazyload" preload="none" autoplay loop muted playsinline data-poster="/assets/images/slideshow/poster.jpg"></video>
	    
	    <div class="ssoverlay"><?php echo $tagline; ?></div><!--.ssoverlay-->
	    
	</div><!--/slideshow -->
	
<?php } ?>
