<?php /* ======================================== 
	#slideshow || classic                  
 ============================================ */ ?>
 
<?php if (is_homepage()) { ?>

	<div id="slideshow">
	    
	    <div id="home-slideshow">
			<?php include 'assets/includes/slideshow.php'; ?>
	    </div><!--/home-slideshow -->
	    
	    <div class="ssoverlay"><?php echo $tagline; ?></div><!--.ssoverlay-->
	    
	</div><!--/slideshow -->
	
<?php } ?>
