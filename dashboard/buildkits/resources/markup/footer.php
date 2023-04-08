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
					<!-- <img src="/assets/images/footer/logo.png" alt="" width="160" height="57" loading="lazy" decoding="async" fetchpriority="low"> -->
					<?php include 'assets/images/logo.svg'; ?>
				</a>
				
				<a class="phone" href="tel:000-000-0000">000_000_0000</a>
								
			    <a class="address" href="#">
					<div class="marker fa-solid fa-location-dot" aria-hidden="true" role="img"></div>
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
