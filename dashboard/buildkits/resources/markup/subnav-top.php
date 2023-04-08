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
