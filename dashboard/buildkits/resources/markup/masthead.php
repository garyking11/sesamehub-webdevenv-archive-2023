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
						<!-- <img src="/assets/images/logo.png" alt="Logo" width="160" height="57" decoding="async" fetchpriority="high"> -->
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
			
			<?php if ($mainnavstyle !== 'fullmob') { ?><div class="container row"><?php } ?>
		    
		    <div class="collapsible">
			    <button id="trigger" class="trigger" aria-label="menu" aria-haspopup="menu">
				    <span class="navicon" aria-hidden="true" role="img"><span></span><span></span><span></span><span></span></span>
				</button>
			    <?php echo navigation(array('Patient Login','Doctor Login', 'Sitemap','Healthgrades')); ?>			
		    </div><!--/collapsible -->
		                
			<?php if ($mainnavstyle !== 'fullmob') { ?></div><!--/container--><?php } ?>
			             
		</nav><!--/main-nav -->
	</header><!--/masthead-->