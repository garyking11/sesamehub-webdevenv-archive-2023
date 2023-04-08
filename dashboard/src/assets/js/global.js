// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function () {
        var noop = function () {
        };
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

console.log('/assets/js/global.js fired');
// Place any jQuery/helper plugins in here.


/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function ($) {
    '$:nomunge'; // Used by YUI compressor.

    var cache = {},
    // Reused internal string.
        doTimeout = 'doTimeout',
    // A convenient shortcut.
        aps = Array.prototype.slice;

    $[doTimeout] = function () {
        return p_doTimeout.apply(window, [0].concat(aps.call(arguments)));
    };

    $.fn[doTimeout] = function () {
        var args = aps.call(arguments),
            result = p_doTimeout.apply(this, [doTimeout + args[0]].concat(args));

        return typeof args[0] === 'number' || typeof args[1] === 'number'
            ? this
            : result;
    };

    function p_doTimeout(jquery_data_key) {
        var that = this,
            elem,
            data = {},
        // Allows the plugin to call a string callback method.
            method_base = jquery_data_key ? $.fn : $,
        // Any additional arguments will be passed to the callback.
            args = arguments,
            slice_args = 4,
            id = args[1],
            delay = args[2],
            callback = args[3];

        if (typeof id !== 'string') {
            slice_args--;

            id = jquery_data_key = 0;
            delay = args[1];
            callback = args[2];
        }

        // If id is passed, store a data reference either as .data on the first
        // element in a jQuery collection, or in the internal cache.
        if (jquery_data_key) { // Note: key is 'doTimeout' + id

            // Get id-object from the first element's data, otherwise initialize it to {}.
            elem = that.eq(0);
            elem.data(jquery_data_key, data = elem.data(jquery_data_key) || {});

        } else if (id) {
            // Get id-object from the cache, otherwise initialize it to {}.
            data = cache[id] || (cache[id] = {});
        }

        // Clear any existing timeout for this id.
        data.id && clearTimeout(data.id);
        delete data.id;

        // Clean up when necessary.
        function cleanup() {
            if (jquery_data_key) {
                elem.removeData(jquery_data_key);
            } else if (id) {
                delete cache[id];
            }
        }
        ;

        // Yes, there actually is a setTimeout call in here!
        function actually_setTimeout() {
            data.id = setTimeout(function () {
                data.fn();
            }, delay);
        }
        ;

        if (callback) {
            // A callback (and delay) were specified. Store the callback reference for
            // possible later use, and then setTimeout.
            data.fn = function (no_polling_loop) {

                // If the callback value is a string, it is assumed to be the name of a
                // method on $ or $.fn depending on where doTimeout was executed.
                if (typeof callback === 'string') {
                    callback = method_base[callback];
                }


                callback.apply(that, aps.call(args, slice_args)) === true && !no_polling_loop

                    // Since the callback returned true, and we're not specifically
                    // canceling a polling loop, do it again!
                    ? actually_setTimeout()

                    // Otherwise, clean up and quit.
                    : cleanup();
            };

            // Set that timeout!
            actually_setTimeout();

        } else if (data.fn) {
            // No callback passed. If force_mode (delay) is true, execute the data.fn
            // callback immediately, continuing any callback return-true polling loop.
            // If force_mode is false, execute the data.fn callback immediately but do
            // NOT continue a callback return-true polling loop. If force_mode is
            // undefined, simply clean up. Since data.fn was still defined, whatever
            // was supposed to happen hadn't yet, so return true.
            delay === undefined ? cleanup() : data.fn(delay === false);
            return true;

        } else {
            // Since no callback was passed, and data.fn isn't defined, it looks like
            // whatever was supposed to happen already did. Clean up and quit!
            cleanup();
        }

    };

    
    // Appointment Request form "Referred by patient" toggle
    $("#Referred_By_Current_Patient").change(function () {

        if ($(this).val() == 'Yes') {
            // not current patient, ask where they found us
            $('#referred_by_patient').fadeIn('slow', function () {
                $(this).find('input').removeAttr('disabled').attr('required', 'required');
            });
        } else {
            // current patient, hide content
            $('#referred_by_patient').fadeOut('fast', function () {
                $(this).find('input').attr('disabled', 'disabled').removeAttr('required');
            });
        }
    });

    // Referral form "Radiographs Sent" toggle
    $("input[name^='sc_form[Radiographs_Sent]']").on('click', function () {
        if ($("input[name^='sc_form[Radiographs_Sent]']:checked").val() == 'Yes') {
            // radiographs sent
            $('.hidden-option').fadeIn('slow', function () {
                $(this).find('input').removeAttr('disabled').attr('required', 'required');
            });
        } else {
            // radiographs not sent
            $('.hidden-option').fadeOut('fast', function () {
                $(this).find('input').attr('disabled', 'disabled').removeAttr('required');
            });
        }
    });

// Check for v3.0 form id #survey_participant
if($('fieldset#survey_participant').length >= 1){

    // Post Appointment Survey form "May We Contact You" toggle
    $("#Contact_Patient").change(function () {

        if ($(this).val() == 'Yes') {
            // yes contact
            $('#survey_participant').fadeIn('slow', function () {
                $(this).find('input').removeAttr('disabled').attr('required', 'required');
            });

            $('#survey_participant').fadeIn('slow', function () {
                $(this).find('input').removeAttr('disabled').attr('required', 'required');
            });


        } else {
            // no do not contact
            $('#survey_participant').fadeOut('fast', function () {
                $(this).find('input').attr('disabled', 'disabled').removeAttr('required');
            });
            $('#survey_participant').fadeOut('fast', function () {
                $(this).find('input').attr('disabled', 'disabled').removeAttr('required');
            });

        }
    });

} else {

    // Post Appointment Survey form "May We Contact You" toggle
    $("#Contact_Patient").change(function () {

        if ($(this).val() == 'Yes') {
            // yes contact
            $('#Survey_Participant_Name').parent().fadeIn('slow', function () {
                $(this).find('input').removeAttr('disabled').attr('required', 'required');
            });

            $('#Survey_Participant_Email').parent().fadeIn('slow', function () {
                $(this).find('input').removeAttr('disabled').attr('required', 'required');
            });


        } else {
            // no do not contact
            $('#Survey_Participant_Name').parent().fadeOut('fast', function () {
                $(this).find('input').attr('disabled', 'disabled').removeAttr('required');
            });
            $('#Survey_Participant_Email').parent().fadeOut('fast', function () {
                $(this).find('input').attr('disabled', 'disabled').removeAttr('required');
            });

        }
    });
	
	} // end if('#survey_participant')

})(jQuery);


/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function (w) {

    // Enable strict mode
    "use strict";

    w.picturefill = function () {
        var ps = w.document.getElementsByTagName("div");

        // Loop the pictures
        for (var i = 0, il = ps.length; i < il; i++) {
            if (ps[i].getAttribute("data-picture") !== null) {

                var sources = ps[i].getElementsByTagName("div"),
                    matches = [];

                // See if which sources match
                for (var j = 0, jl = sources.length; j < jl; j++) {
                    var media = sources[j].getAttribute("data-media");
                    // if there's no media specified, OR w.matchMedia is supported 
                    if (!media || (w.matchMedia && w.matchMedia(media).matches)) {
                        matches.push(sources[j]);
                    }
                }

                // Find any existing img element in the picture element
                var picImg = ps[i].getElementsByTagName("img")[0];

                if (matches.length) {
                    if (!picImg) {
                        picImg = w.document.createElement("img");
                        picImg.alt = ps[i].getAttribute("data-alt");
                        ps[i].appendChild(picImg);
                    }

                    picImg.src = matches.pop().getAttribute("data-src");
                }
                else if (picImg) {
                    ps[i].removeChild(picImg);
                }
            }
        }
    };

    // Run on resize and domready (w.load as a fallback)
    if (w.addEventListener) {
        w.addEventListener("resize", w.picturefill, false);
        w.addEventListener("DOMContentLoaded", function () {
            w.picturefill();
            // Run once only
            w.removeEventListener("load", w.picturefill, false);
        }, false);
        w.addEventListener("load", w.picturefill, false);
    }
    else if (w.attachEvent) {
        w.attachEvent("onload", w.picturefill);
    }

}(this));


/*
 * Requires jQuery, doTimeout and Modernizr - Features customizable trigger and collapsable elements, collapsable sub elements
 * and full touch support for phone, tablet and desktop.
 */
(function ($, window, document, undefined) {
    $.fn.responsiveNav = function (options) {

        var o = $.extend({}, {
            breakpointMin: 0,
            breakpointMax: 1024,
            collapsible: 'ul:first',
            trigger: 'a',
            openClass: 'open'
        }, options);

        this.each(function () {

            var obj = $(this);

            $(o.trigger, obj).bind('click', function () {

                screenWidth = $(window).width();
                firable = (screenWidth > o.breakpointMin && screenWidth < o.breakpointMax);

                if (firable === true) {
                    var parent = $(this).parent();
                    // If the parent <li> contains a nested <ul>, we need to handle this
                    // this link differently.
                    if (parent.has(o.collapsible).length == true) {
                        parent.toggleClass(o.openClass);
                        return false;
                    }
                }
            });


            $(window).resize(function () {
                $.doTimeout('resize', 200, function () {
                    screenWidth = $(window).width();
                    firable = (screenWidth > o.breakpointMin && screenWidth < o.breakpointMax);
                    if (firable == false) {
                        obj.find(o.openClass).removeClass(o.openClass);
                    }
                });
            });
        });
        return this;
    };
})(jQuery, window, document);

/*
 * Responsive Slideshow Plugin
 *
 * Requires jQuery
 */

(function ($, window, document, undefined) {

    var pluginName = "slideshow",
        defaults = {
            autoplay: false,
            navigation: false,
            transition: false,
            pagination: false,
            interval: 5000,
            transitioningClass: pluginName + "-transitioning",
            itemClass: pluginName + "-item",
            activeClass: pluginName + "-active",
            enterClass: pluginName + "-in",
            exitClass: pluginName + "-out",
            navClass: pluginName + "-nav",
            paginationClass: pluginName + "-pagination",
            activePageClass: pluginName + "-active-page",
            nextText: "Next",
            prevText: "Prev"
        },
    // Scans through and checks for whether or not CSS Transitions are supported
        cssTransitionsSupport = (function () {
            var prefixes = "webkit Moz O Ms".split(" "),
                supported = false,
                property;

            while (prefixes.length) {
                property = prefixes.shift() + "Transition";

                if (property in document.documentElement.style !== undefined && property in document.documentElement.style !== false) {
                    supported = true;
                    break;
                }
            }
            return supported;
        }()),
        methods = {
            // Calls our plugin hooks, initilization function and creates arrow navigation
            _create: function () {

                // Let's grab out transition type
                var trans = this.opt.transition;

                // Does the current browser support CSS transitions?
                if (!trans) {
                    cssTransitionsSupport = false;
                }

                // Caching for ease
                $elem = $(this);

                // Let's begin establishing our classes and create needed elements
                $elem
                    .trigger("beforecreate." + pluginName)
                    // Let's add our transition classes to our parent container
                    .addClass(
                        pluginName +
                        " " + (trans ? pluginName + "-" + trans : "") + " "
                    )
                    // Let's label our slides/items
                    .children().addClass(this.opt.itemClass)
                    .each(function (i) {
                        var $self = $(this);
                        $self.addClass($self.attr('class') + '-' + (i + 1));
                    })
                    // Add our active class to the first child
                    .first().addClass(this.opt.activeClass);

                // Check and add prev/next buttons
                if (this.opt.navigation === true) {
                    $elem
                        [pluginName]("_addNextPrev");
                }

                // Check and add pagination
                if (this.opt.pagination === true) {
                    $elem
                        [pluginName]("_createPagination")
                        [pluginName]("_bindPaginationEvents");
                }

                // Check and add pagination
                if (this.opt.autoplay === true) {
                    $elem
                        [pluginName]("_initAutoPlay");
                }

                $elem
                    .trigger("create." + pluginName);
            },
            next: function () {
                $(this)[pluginName]("goTo", "+1");
            },
            prev: function () {
                $(this)[pluginName]("goTo", "-1");
            },
            // This establishes the current and next slide and then calls our transition to the proper slide
            goTo: function (num) {

                var $self = $(this),
                    trans = this.opt.transition,
                    reverseClass = " " + pluginName + "-" + trans + "-reverse";

                // clean up children
                $(this).find("." + this.opt.itemClass).removeClass([this.opt.exitClass, this.opt.enterClass, reverseClass].join(" "));

                var $from = $(this).find("." + this.opt.activeClass),
                    prevs = $from.index(),
                    activeNum = (prevs < 0 ? 0 : prevs) + 1,
                    nextNum = typeof(num) === "number" ? num : activeNum + parseFloat(num),
                    $to = $(this).find("." + this.opt.itemClass).eq(nextNum - 1),
                    reverse = (typeof(num) === "string" && !(parseFloat(num))) || nextNum > activeNum ? "" : reverseClass;

                if (!$to.length) {
                    $to = $(this).find("." + this.opt.itemClass)[reverse.length ? "last" : "first"]();
                }

                if (cssTransitionsSupport) {
                    $self[pluginName]("_transitionStart", $from, $to, reverse);
                } else {
                    $to.addClass(this.opt.activeClass);
                    $self[pluginName]("_transitionEnd", $from, $to, reverse);
                }

                // added to allow pagination to track
                $self.trigger("goto." + pluginName, $to);
            },
            update: function () {
                $(this).children().not("." + this.opt.navClass).addClass(this.opt.itemClass);

                return $(this).trigger("update." + pluginName);
            },
            _transitionStart: function ($from, $to, reverseClass) {
                var $self = $(this);

                $(this).addClass(reverseClass);
                $from.addClass(this.opt.exitClass);
                $to.addClass(this.opt.enterClass);

                // The conditional is a delay that only fires the ending transition after it's completed.
                //$to.one( navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ? "webkitTransitionEnd" : "transitionend otransitionend", function(){
                $self[pluginName]("_transitionEnd", $from, $to, reverseClass);
                //});
            },
            _transitionEnd: function ($from, $to, reverseClass) {
                $(this).removeClass(reverseClass);
                $from.removeClass(this.opt.exitClass + " " + this.opt.activeClass);
                $to.removeClass(this.opt.enterClass).addClass(this.opt.activeClass);
            },
            _bindEventListeners: function () {
                var $elem = $(this)
                    .bind("click", function (e) {
                        var targ = $(e.target).closest("a[href='#next'],a[href='#prev']");
                        if (targ.length) {
                            $elem[pluginName](targ.is("[href='#next']") ? "next" : "prev");
                            e.preventDefault();
                        }
                    });

                return this;
            },
            // Adds our next and previous navigation arrows
            _addNextPrev: function () {
                return $elem = $(this)
                    .append("<nav class='" + this.opt.navClass + "'><a href='#prev' class='prev' aria-hidden='true' title='Previous'>" + this.opt.prevText + "</a><a href='#next' class='next' aria-hidden='true' title='Next'>" + this.opt.nextText + "</a></nav>")
                    [pluginName]("_bindEventListeners");
            },
            _createPagination: function () {
                var nav = $(this).find("." + this.opt.navClass),
                    items = $(this).find("." + this.opt.itemClass),
                    pNav = $("<ol class='" + this.opt.paginationClass + "'></ol>"),
                    num;

                // Add the navigation element if none is found
                if (nav.length < 1) {
                    $(this).append("<nav class='" + this.opt.navClass + "'></nav>");
                    nav = $(this).find("." + this.opt.navClass);
                }
                // Remove any existing pagination nav
                nav.find("." + this.opt.paginationClass).remove();

                for (var i = 0, il = items.length; i < il; i++) {
                    num = i + 1;
                    pNav.append("<li class='" + pluginName + "-page-" + num + "'><a href='#" + num + "' title='Go to slide " + num + "'>" + num + "</a>");
                }
                nav
                    .addClass(pluginName + "-nav-paginated")
                    .append(pNav);
            },
            _bindPaginationEvents: function () {
                $(this)
                    .bind("click", function (e) {
                        var pagLink = $(e.target).closest("a"),
                            href = pagLink.attr("href");

                        if (pagLink.closest("." + this.opt.paginationClass).length && href) {
                            $(this)[pluginName]("goTo", parseFloat(href.split("#")[1]));
                            e.preventDefault();
                        }
                    })
                    // update pagination on page change
                    .bind("goto." + pluginName, function (e, to) {
                        var index = to ? $(to).index() : 0;
                        $(this).find("ol." + this.opt.paginationClass + " li")
                            .removeClass(this.opt.activePageClass)
                            .eq(index)
                            .addClass(this.opt.activePageClass);
                    })
                    // initialize pagination
                    .trigger("goto." + pluginName);
            },
            // Autoplay
            play: function () {
                var $self = $(this);
                return $self.data(
                    "timer",
                    setInterval(function () {
                            $self[pluginName]("next");
                        },
                        this.opt.interval)
                );
            },
            stop: function () {
                clearTimeout($(this).data("timer"));
            },
            _initAutoPlay: function () {
                $self = $(this)
                    .bind("mouseover", function () {
                        $self[pluginName]("stop");
                    })
                    .bind("mouseout", function () {
                        $self[pluginName]("play");
                    })
                    [pluginName]("play");
            },
            destroy: function () {
                // TODO
            }
        };

    // Collection method.
    $.fn[pluginName] = function (arrg, a, b, c) {

        return this.each(function () {

            // if it's a method
            if (arrg && typeof(arrg) === "string") {
                return $.fn[pluginName].prototype[arrg].call(this, a, b, c);
            }

            // don't re-init
            if ($(this).data(pluginName + "data")) {
                return $(this);
            }

            // otherwise, init
            $(this).data(pluginName + "active", true);
            this.opt = $.extend({}, defaults, arrg);
            $.fn[pluginName].prototype._create.call(this);
        });
    };

    // add methods
    $.extend($.fn[pluginName].prototype, methods);


})(jQuery, window, document);


/*  Email obfuscator by stylephreak: http://codesnippets.joyent.com/user/stylephreak#post1735 
 -------------------------------------------------------------------------------------------*/
jQuery.fn.emailProt = function (e, t) {
    $(this).each(function () {
        e = this.rel.replace('|', '@');
        // 't' is the link text after script runs
        t = this.title;
        this.href = 'mailto:' + e;
        //added class for styling purposes, and changed the "text" of element
        $(this).text(t).addClass('mailto');
    });
};

/**
 * Returns screen size in EM
 */
function EMsize() {
    return $(window).width() / parseFloat($("html").css("font-size"));
}

// End Plugins

console.log('All Plugins Succesfully Loaded.');


$(function () {

    //Open external links in a new window
    $('a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).addClass("external").attr('target', '_blank');


    // Disable click to call on desktop
    if (EMsize() > 48) {
        $("a[href^='tel:']").each(function () {
            var myText = $(this).text();
            $(this).replaceWith('<span class="phone">' + myText + '</span>');
        });
    }

    // Add captions for Invisalign before and after slides based on alt text
    $('#invisalign-before-after .slideshow li img:first-child').each(function () {
        $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    });

    // Add captions for before and after slides based on alt text
    // $('.before-and-after.slideshow div img:first-child').each(function() {
    //     $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    // });

    // Add captions for office tour slides based on alt text
    // $('.office-tour.slideshow div img:first-child').each(function() {
    //     $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    //  });

    $('form').append('<input type="hidden" name="sc_form[antispam]" value="1"/>');

    // Attach a class to IE10
    if (Function('/*@cc_on return 10===document.documentMode@*/')()) {
        document.documentElement.className += ' ie10';
    }

    //Attach a data useragent to IE11
    var IE11doc = document.documentElement;
    IE11doc.setAttribute('data-useragent', navigator.userAgent);

});

// End Global JS

console.log('All Global Javascript Successfully Executed.');


$(document).ready(function () {
    
    // facilitate ie10 CSS class selector
    /*if (navigator.userAgent.indexOf("MSIE 10") > -1) {
        document.body.classList.add("ie10");
    }*/


    // Healthgrades drop-down
    if ($('#healthgrades-widget').find('ul ul').length) {
        // found!
        $('#healthgrades-widget').addClass('dropdown');
    } else {
        // no drop-down!
        $('#healthgrades-widget').addClass('no-dropdown');
    }

    $(window).load(function () { // so chrome can figure out the sizes
//resize footer map and slideshow callout area
        placeTourNav();
    });
});


$(window).resize(function () {

    officetourNav = $('.office-tour.slideshow .slideshow-nav').outerHeight();
    beforetourNav = $('.before-and-after.slideshow .slideshow-nav').outerHeight();


    $('.office-tour.slideshow .slideshow-item').css({'margin-top': officetourNav});
    $('.before-and-after.slideshow .slideshow-item').css({'margin-top': beforetourNav});


});

function placeTourNav() {
    officetourNav = $('.office-tour.slideshow .slideshow-nav').outerHeight();
    beforetourNav = $('.before-and-after.slideshow .slideshow-nav').outerHeight();


    $('.office-tour.slideshow .slideshow-item').css({'margin-top': officetourNav});
    $('.before-and-after.slideshow .slideshow-item').css({'margin-top': beforetourNav});

} // close placeTourNav
// Color My Braces
// jQuery setup
jQuery(document).ready(function() {
    if( $('#braces-painter') )
        paint_braces();
}); //end doc ready
/*******************
 * COLOR MY BRACES
 ********************/
var color = 'white';
var colors;
function paint_braces(){
    var infoBoxStart = true;
    if(infoBoxStart) {
        $('#cmb-infobox').text('Get started by choosing a color below!');
    }
    var infoBoxChange = function(infoBoxStatus) {
        if (infoBoxStatus == 2 && infoBoxStart == false) {
            $('#cmb-infobox').html('Great! Now <span class="hide-cmb-text">click on a tooth, or </span>choose an option below!');
        } else if (infoBoxStatus == 3 && infoBoxStart == false) {
            $('#cmb-infobox').html('Looks good! Choose another option, or select a new color.');
        }
    }
    var colorSelectors = $('<div id="cmb-color-selectors">');
    // add assigning buttons
    colorSelectors.append("<div id='assign_btns'></div>");
    $('#color-my-braces-container').append(colorSelectors);
    var assign_btns = ["all", "upper", "lower", "even", "odd", "random"];
    // create option buttons and color teeth on click
    for(var i = 0; i < assign_btns.length; i++){
        $("<div class='assign_btn' assignment='" + assign_btns[i] + "' ><span>" + assign_btns[i] + "<br />teeth</span></div>").click(function(){
            paintTeeth( $(this).attr('assignment') );
        }).appendTo('#assign_btns');
    }
    // add color btns
    colorSelectors.append("<div id='color_btns'></div>");
    // create color buttons
    var color_btns = ['000000', '9f8f84', '996633', '006600', '336666', '003399', '6633cc', 'ff0000', 'cc3300', 'ff0099',
        '666666', 'cccccc', 'dbb693', '009900', '00cccc', '0033ff', '9966ff', 'ffcc33', 'ff6600', 'ff66cc',
        '999999', 'f8f3e7', 'ffffcc', '99cc00', 'ffffff', '99ccff', 'ccccff', 'ffff00', 'ff9966', 'ff99cc'];
    colors = color_btns;
    infoBoxChange(2);
    for(var i = 0; i < color_btns.length; i++){
        $("<div class='color_btn'   style='background: #"  + color_btns[i] + "' color='" + color_btns[i] + "'>&nbsp;</div>").click(function(){
            color = "#" + $(this).attr('color');
            infoBoxStart = false;
            infoBoxChange(2);
            //$(this).css('background', '#000');
            $('.color_btn').empty();
            if (
                $(this).attr('color') != 'ffffff'
                && $(this).attr('color') != 'f8f3e7'
                &&  $(this).attr('color') != 'ffffcc'
                &&  $(this).attr('color') != 'cccccc'
                &&  $(this).attr('color') != 'ffff00'
            ) {
                // $(this).prepend('<img src="/assets/plugins/color-my-braces/images/color-braces-tooth-icon-white.png" class=" " alt=""/>')
                $(this).html('<i class="color-braces-icon fa tooth-icons-tooth"></i>')
            }   else {
                //  $(this).prepend('<img src="/assets/plugins/color-my-braces/images/color-braces-tooth-icon.png" class=" " alt=""/>')
                $(this).html('<i class="color-braces-icon-black fa tooth-icons-tooth"></i>')
            }
        }).appendTo('#color_btns');
    }
    // add teeth
    for(var i = 0; i < 14; i++){
        $("<div id='tooth_" + i + "' class='cmb-tooth'>").click(function(){
            paintTooth( $(this).attr('id') );
            if (infoBoxStart == false) {
                infoBoxChange(3);
            }
        }).appendTo('#braces-painter');
    }
    // color individual teeth
    function paintTooth(tooth){
        $("#" + tooth).css('background-color', color);
        if (infoBoxStart == false) {
            infoBoxChange(3);
        }
    }
    // color teeth using options
    function paintTeeth(assignmentType){
        var at = assignmentType;
        var tc = color;
        for( var i = at == "lower" ? 8 : at == "even" ? 1 : 0 ;
             at == "upper" ? i < 8 : i < 14;
             at == "even" ? i += 2 : at == "odd" ? i += 2 : i++ ){
            if( at == "random" ) {
                tc = "#" + colors[ Math.round( Math.random() * 13 ) - 1 ];
            }
            $('#tooth_' + i).css('background-color', tc);
            if ( infoBoxStart == false ) {
                infoBoxChange(3);
            }
        }
    }
} // end Color My Braces