$(window).on('resize', function () {});

$(document).ready(function() {
	
	$(window).trigger('resize');
	
	$('#main-nav').responsiveNav();
	
	/*$('#slider1').bxSlider({
		auto: true,
		pause:5000, 
		mode: 'fade',
		controls: false
	});
	
	$(".home header h1:contains('Welcome to')").html(function(_, html) {
		return html.replace(/(Welcome to)/g, '<span>Welcome to</span>');
	});
	
	$('.office-tour.slideshow, .before-and-after.slideshow').slideshow({
		autoplay:true, 
		transition:'fade', 
		pagination: true, 
		navigation:true,
		interval:5000
	});
	if (Modernizr.touch){
		$('#callouts .callout').click(function(){
			$(this).toggleClass('callout-open');
		});
	}*/
	
		// Add captions for before and after slides based on alt text
    //$('.before-and-after.slideshow div img:first-child').each(function() {
       // $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
   // });
	
	// Add captions for office tour slides based on alt text
    //$('.office-tour.slideshow div img:first-child').each(function() {
       // $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
   // });
   
//animate callouts
/*	$('.shift').hover( function() { //, #sidebar a
		$(this).animate({bottom: '3px'},{queue:false,duration:100});
		}, function() {
		$(this).animate({bottom: '0'},{queue:false,duration:400});
		});	
	
	$('.linkHover').hover( function() {
		$(this).animate({opacity: '.65'}, 400);
		}, function() {
		$(this).animate({opacity: '1'},400);
		});	
		
//Back to top hide and animate
	if ($('#bd').height() > $(window).height()) {
		$('#back-to-top').removeClass('hide');
		$('.back-to-top').removeClass('hide');
	}
	/!* $('.back-to-top').removeClass('hide'); *!/
	$('#back-to-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});
	$('a.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});*/

        
        // Flash Modules 

/*
					var flashModules = {
						defaults: {			
							'width': 500,
							'height': 300,
							'src': '/sesame_media/flash/',//default location of all Sesame flash mods
							'wmode': 'transparent',
							'flashvars': {
								'autoPlay': 'false', // change value to 'true'to play on start
								'thisColor': '0x' + '639CCE' // change global hex color (default=639CCE)
							},
							'express': 'flash/playerProductInstall.swf',
							'version':'9'
						},
						
						modules: [
						// Define the configuration values for each flash module.
						// Change item values in any 'flashvars' section to false to omit,
						// Add any value to override the default value in flashModuleDefaults.
					
            {
                name: 'patient-care',
									config: {
									'src': '/sesame_media/flash/',//uses local location; default is /sesame_scripts
									'height': 375,
											'flashvars': {
											'autoPlay': 'false',
											'xmlFile': '/assets/video/videos.xml'//location and name of xml file (e.g., /assets/video/videos.xml)
											}
									}
								}
												
							]
						};
*/

// Loop through the defined modules 
// and do flash replacement for any that are on the current page
/*for (var j = flashModules.modules.length - 1; j >= 0; j--){
  var module = flashModules.modules[j];
  // combine default config settings with individual module config settings
  var modConfig = $.extend({}, flashModules.defaults, module.config);
  // combine default flashvars with module flashvars
  modConfig.flashvars = $.extend(flashModules.defaults.flashvars, module.config.flashvars);
  modConfig.src = modConfig.src + module.name + '.swf';
  $('#flash-' + module.name).flash(modConfig);
}*/

 // Flash Video functions
                //-------------------------------------------------------------------------------
                
 /*               var flashVideos = {
                
                    defaults: {
                        // Define the configuation values applied to each module.
                        // Each module in flashModules can override these values.
                        
                        'src': '/sesame_media/video/flvPlayer.swf',
                        'dir': '/sesame_media/video/',//location of video files
                        'img_dir': '/sesame_media/video/',//location of image files
                        'width': 320,
                        'height': 266,
                        'wmode': 'transparent',
                        'menu': false,
                        'allowFullScreen': true,
                        flashvars: {
                            'autoStart': 'false', // change value to true to play on start
                            'showScaleModes': 'false', //set to false to disable scale modes menu
                            'smoothVideo': 'true' //set to false to disable video smoothing 
                        }
                    },
                
                    videos: [
                        {name: 'the-damon-system',config:{'width': 240, 'height': 206}},
                        {name: 'the-damon-system-2',config:{'width': 400, 'height': 330}},
                        {name: 'in-ovation',config:{}},
                        {name: 'opalescence', config: {'width': 400, 'height': 251}},
            {
                name: 'invisalign',
                            config: {
                                //dir: '',//leave blank to override location of video
                                //img_dir: 'video/',//override location of image file
                                'width': 360
                            }
                        },
                        {name: 'suresmile', config: {'height': 206}},
            {
                name: 'suresmile-robot',
                            config: {
                                'height': 242, 
                                flashvars: {
                                    startImage: 'none', 
                                    autoStart: 'true'
                                }
                            }
                        },
                        //Invisalign ProPack
                        {name: 'invisalign', config: {'width': 360, 'height': 266}},
                        {name: 'invisalign-best-friends', config: {}},
                        {name: 'invisalign-news-travels-fast', config: {}},
                        {name: 'invisalign-lobby', config:{'width': 320, 'height': 266}}
                    ]
                };
                
                for (var j=0; j < flashVideos.videos.length; j++) {
                    var video = flashVideos.videos[j];
                    // combine default config settings with module config settings
                    var vidConfig = $.extend({}, flashVideos.defaults, video.config);
                    // combine default flashvars with module flashvars
                    vidConfig.flashvars = $.extend({}, flashVideos.defaults.flashvars, video.config.flashvars);
                    vidConfig.flashvars.flvToPlay = vidConfig.dir + video.name + '.flv';
                    vidConfig.flashvars.startImage = vidConfig.img_dir + video.name + '.jpg';
                    $('#video-' + video.name).flash(vidConfig, flashVideos.defaults.pluginOptions);
                };


*/

 /* obfuscate email */
 /*var $emailLinks = $('a.email');
        
    if ($emailLinks.length < 1) {} // skip this function if no objects found
		// Insert empty <a> tag with the following attributes:
		// * class="email"
		// * rel="example|domain.com" where pipe char '|' replaces '@'
		// * title="Email Us", this is the text shown after the email link is created by js                 
		$emailLinks.addClass('addicon').emailProt();
		
    // Open external links in new windows
		var domainName = window.location.hostname;
		$('a[href^="http://"], a[href^="https://"]')
			.not('a[href$=".doc"], a[href$=".pdf"], a[href*="' + domainName + '"]')
			.addClass('external').attr('target', '_blank');*/


		
}); // end doc ready
