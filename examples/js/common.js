$(function() {

	var bodyPage = $('body');

// page navigation

	bodyPage.sectionScroll();

//******************

new WOW().init();


	$("#form-popup").validationEngine('attach',{
		promptPosition : "bottomLeft", maxErrorsPerField : 1,
		showArrow : false, 'custom_error_messages':{
			'#form-name' : {
				'required' : {
					'message' : "* This field is required"
				},
				'minSize' : {
					'message' : "* Little lenght. Need more"
				}
			},
			'#form-sname' : {
				'minSize' : {
					'message' : "* Little lenght. Need more"
				}
			},
			'#form-email' : {
				'required' : {
					'message' : "* This field is required"
				},
				'custom[email]' : {
					'message' : "* Error."
				}
			},
			'#form-area' : {
				'required' : {
					'message' : "* This field is required"
				},
				'minSize' : {
					'message' : "* Need more words"
				}
			}
		}
	});

// form open/close

$('.btn-switch').click(function(e) {

	var firstSpan = $('.btn-switch span');
	var secondSpan = $('.btn-switch i');

	if(firstSpan.is(':visible')){
		firstSpan.hide();
		secondSpan.show();
	} else{
		firstSpan.show();
		secondSpan.hide();
	}

	$('.form-box').toggleClass('form-box_is-close');
	$('.form-popup').toggleClass('btn-switch_is-close');
	e.preventDefault();
});

//******************


// signin open/close

$('#session').click(function(e) {
	$(this).toggleClass('active');
	$('.signin-dropdown').toggleClass('is-visible');
});

//******************


// showing button Up

	var arrowTop = document.querySelector('#page-scroll-top');

	function btnScrollTop(e){
		if(document.body.scrollTop > 200){
			arrowTop.style.opacity = '1';
		} else{
			arrowTop.style.opacity = '0';
		}
	};

	document.addEventListener('scroll', btnScrollTop);

//*************
	
	var bulletsContainer = $('.bullets-container');

	$(window).scroll(function() {
		if(bulletsContainer.offset().top > 500) {
			bulletsContainer.css({'display':'flex'})
		} else{
			bulletsContainer.css({'display':'none'})
		}
	});

// button Up

	var bodyScrollArrows = $('html,body');

	$('#page-scroll-top').click(function(e) {
  	e.preventDefault();
		bodyScrollArrows.stop().animate({ scrollTop: $('#header').offset().top }, 500);
	});

//****************



// button Down

	$('#btn-down').click(function(e) {
  	e.preventDefault();
		bodyScrollArrows.stop().animate({ scrollTop: $('#scrollto-section-1').offset().top }, 400);
	});

//****************



// open burger-menu

	var mainBurgerMenu = $('.main-burger-menu'),
			burgerPanelList = $('.burger-panel-list'),
			burgerPanelContainer = $('.burger-panel--container');

	$('#burger-top').click(function(e) {
		$(this).toggleClass('active');
		burgerPanelContainer.toggleClass('burger-panel--container-active');
		$('.bullets-container').toggleClass('bullets-container--translate');
  	e.preventDefault();
	});

//****************



// effect elements list in open-burger menu

	$('.burger-panel__elem').hover(function() {
		$(this).children('.burger-panel__list').slideToggle();
	});

//****************



//use function fixmenu

	$(".nav-wrapper").fixmenu();

//****************

// smooth scroll when click on link in menu

	$('a.burger-panel__elem-link').smoothScroll({
		speed: 700
	});

//****************



//header slider 

	$('.header-slider').slick({
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000, 	// speed from the previous to the next slide
		draggable: false,
		speed: 1000, 					// speed transition
		swipe: false,
		pauseOnFocus: false,
		pauseOnHover: false
	});

//****************

// form

	$("#form-popup").submit(function() {

		if (true){
			post_data = {
				'user_name': $('input[name=form-name]').val(),
				'user_sname': $('input[name=form-sname]').val(),
				'phone_email': $('input[name=form-email]').val(),
				'msg': $('textarea[name=form-area]').val()
			};


			$.post('../mail.php', post_data, function(response) {
				if (response.type == 'error') {
					console.log(0);
				} else {
					console.log(1);
				}
			}, 'json');
		}
		
	});

//****************

});

$.fn.fixmenu = function() {
	
// fix menu on top where scrolling

	var menuSelector = $(this);   
	menuSelector.wrap("<div class='top-menu-container' style='" + "min-height:" + menuSelector.height() + "px;'></div");
	sticky();

	var scrollPos = 0;

	$(window).scroll(function(){
		sticky()
	});

	function sticky() {

 		var st = $(this).scrollTop();

		var scrollTop = $(document).scrollTop();
		// if height page < 350px
		if (scrollTop < 550) {
			menuSelector.addClass('nav-wrapper');
			return
		}   
		if (st > scrollPos){
		// if scrolling down
			menuSelector.removeClass('nav-wrapper');
		} else {
		// if scrolling up and height page < 650px
			if (scrollTop < 300) {
				menuSelector.removeClass('nav-wrapper');
				return
			}  
		menuSelector.addClass('nav-wrapper', 'nav-wrapper--bgc');
		}
	scrollPos = st;
	}

}