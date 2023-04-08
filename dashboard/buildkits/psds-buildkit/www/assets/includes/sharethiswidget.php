<?php if (is_blog()): ?>
	<form action="/blog/search/" method="get" id="blog_search">
	<label for="blog_search_term">Search Blog:</label>
	<input id="blog_search_term" type="text" name="term" />
	<button class="button button-small box-round">Search</button>
	</form>
<?php endif; ?>
	
<!-- Blog -->
<?php if(is_blog() && $page['slug'] != 'search-results' && $page['slug'] != 'blog' && !$is_tag && !$is_category && !$is_paginated_index ): ?>
		<!-- ShareThis Widget -->
		<p class="share-text">Share Article:</p>
		<script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=63ee8c45eb9eeb0012fa5f6b&product=inline-share-buttons&source=platform" async="async"></script>
		
		<div class="sharethis-inline-share-buttons"></div>

<?php endif; ?>