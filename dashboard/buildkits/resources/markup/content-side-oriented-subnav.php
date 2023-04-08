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
			
			<?php if(sub_navigation()): ?>
			<div id="subnav">
				<h2 class="topic"><?php echo $page['section']; ?></h2>
			    <nav><?php echo text_sub_navigation('',$seperator='',''); ?></nav>
			</div><!--/subnav-->	
			 <?php endif; ?>
			
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
	