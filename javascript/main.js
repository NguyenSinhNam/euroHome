/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * flatIconboxCarousel
  * blogCarousel
  * ClientCarousel
  * flatTeam
  * googleMap
  * portfolioIsotope
  * goTop
  * parallax
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed_s1 = function() {
        var nav = $('.header.bg-color');
            if ( nav.size() !== 0 ) {

            $(window).on('load', function(){
            var header = $('.header.bg-color');           
            var offsetTop = $('.header.bg-color').offset().top;
            var headerHeight = $('.header.bg-color').height();
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                buffer.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop  ) {
                        $('.header.bg-color').addClass('fixed-header');
                        buffer.show();
                    } else {
                        $('.header.bg-color').removeClass('fixed-header');
                        buffer.hide();
                    }
                })
           
            }); // headerFixed style1
        }
    };
    
    var goTop = function() {
        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var removePreloader = function() { 
        $(window).load(function() { 
            $('.preloader').css('opacity', 0);
            setTimeout(function() {
                $('.preloader').hide(); }, 1000           
            ); 
        }); 
         
    };

    var carousel = function() {
        var owl_carousel = $("div.carousel");
        if (owl_carousel.length > 0) {
            owl_carousel.each(function() {
                var $this = $(this),
                    $items = ($this.data('items')) ? $this.data('items') : 1,
                    $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                    $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                    $navarrows = ($this.data('nav-arrows')) ? $this.data('nav-arrows') : false,
                    $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
                    $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 3500,
                    $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 950,
                    $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                    $space = ($this.attr('data-space')) ? $this.data('space') : 15;

                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                        0: {
                            items: $this.data('xs-items') ? $this.data('xs-items') : 1
                        },
                        600: {
                            items: $this.data('sm-items') ? $this.data('sm-items') : 2
                        },
                        1000: {
                            items: $this.data('md-items') ? $this.data('md-items') : 3
                        },
                        1000: {
                            items: $items
                        }
                    },
                    dots: $navdots,
                    autoplayTimeout:$autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight:$autohgt,
                    margin:$space,
                    nav: $navarrows,
                    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true
                });
            });
        }
    }

    var iziModal = function(){
        $(".izimodal").iziModal({
            width: 850,
            top: null,
            bottom: null,
            borderBottom: false,
            padding: 0,
            radius: 3,
            zindex: 999999,
            iframe: false,
            iframeHeight: 400,
            iframeURL: null,
            focusInput: false,
            group: '',
            loop: false,
            arrowKeys: true,
            navigateCaption: true,
            navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
            history: false,
            restoreDefaultContent: true,
            autoOpen: 0, // Boolean, Number
            bodyOverflow: false,
            fullscreen: false,
            openFullscreen: false,
            closeOnEscape: true,
            closeButton: true,
            appendTo: 'body', // or false
            appendToOverlay: 'body', // or false
            overlay: true,
            overlayClose: true,
            overlayColor: 'rgba(0, 0, 0, .7)',
            timeout: false,
            timeoutProgressbar: false,
            pauseOnHover: false,
            timeoutProgressbarColor: 'rgba(255,255,255,0)',
            transitionIn: 'comingIn',
            transitionOut: 'comingOut',
            transitionInOverlay: 'fadeIn',
            transitionOutOverlay: 'fadeOut',
            onFullscreen: function(){},
            onResize: function(){},
            onOpening: function(){},
            onOpened: function(){},
            onClosing: function(){},
            onClosed: function(){},
            afterRender: function(){}
        });

        $(document).on('click', '.trigger', function (event) {
            event.preventDefault();
            $('.izimodal').iziModal('setZindex', 99999999);
            $('.izimodal').iziModal('open', { zindex: 99999999 });
            $('.izimodal').iziModal('open');
        });
    }


    var sidebarToggle = function(){
        var $toggle_menu = $('.toggle-menu .menu').attr('class', 'menu').hide();
        $('.toggle-menu .title').on('click', function() {         
            $('.toggle-menu .menu').slideToggle(300);
            $(this).toggleClass('active');
        });
    }

    var sidebarToggle = function() {
        var args = {duration: 600};
        $('.dns-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.dns-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.dns-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.dns-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.dns-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };
    

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed_s1();
        }          
        responsiveMenu();
        goTop();
        carousel();
        iziModal();
        sidebarToggle();
        removePreloader();
   	});

})(jQuery);