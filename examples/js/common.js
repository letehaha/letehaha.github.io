$(function() {

	var bodyPage = $('body');

// page navigation

	bodyPage.sectionScroll();

//******************



// animate blocks

new WOW().init();

//******************



// form validation

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
			}
			// '#form-area' : {
			// 	'required' : {
			// 		'message' : "* This field is required"
			// 	},
			// 	'minSize' : {
			// 		'message' : "* Need more words"
			// 	}
			// }
		}
	});

//******************



// form open/close

$('.btn-switch').click(function(e) {

	var firstSpan = $('.btn-switch span');
	var secondSpan = $('.btn-switch i');

	if(secondSpan.is(':visible')){
		firstSpan.css({'display':'flex'});
		secondSpan.hide();
	} else{
		firstSpan.hide();
		secondSpan.show();
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
		// $('.popup-container').css({'display':'flex'});
		// setTimeout(function(){
		// 	$('.popup-container').hide();
		// }, 5000);
		// setTimeout(function(){
		// 	$("#form-popup").trigger('reset');
		// 	$(".form-box").addClass('form-box_is-close');
		// 	$('.btn-switch span').hide();
		// 	$('.btn-switch i').show();
		// }, 500);
		submitFormAnimations();

		return false;
	});

	function submitFormAnimations(e) {
		$('.envelope__bottom--back').css({'background':'#333'});
		$('.top, .bottom, .right, .left').show();
		setTimeout(function(){
			var boxWidth = $('.form-box').width();
			$('.form-box').removeClass('form-box_is-close');
			$('.form-box').addClass('form-box_center');
			$('.btn-switch').hide();
		}, 400);
		setTimeout(function(){
			$('.form-box').css({'z-index':'1'})
		}, 300);
		setTimeout(function(){
			// $('.form-box').css({'bottom': '60%'});
			$('.envelope__bottom').css({'margin-top':'50px'});
		}, 1000);
		setTimeout(function(){
			$('.form-box').css({
				'bottom': '170px',
				'overflow': 'hidden',
				'height' : '225px'
			})
		}, 1100);
		setTimeout(function(){
			$('.top').css({
				'transform': 'rotatex(0deg)',
				'z-index': '3'
			});
		}, 1100);
		setTimeout(function(){
			$('.envelope').css({
				'transform':'translateY(-600px)',
				'overflow':'hidden'
			});
		}, 3500);
		setTimeout(function(){
			$('.popup-thanks').css({'transform':'translateY(0px)'});
		}, 4000);
		setTimeout(function(){
			submitFormPropag();
		}, 6500);
	}

	function submitFormPropag(e) {
		$('.form-box').addClass('form-box_is-close');
		$('.form-box').css({
			'bottom':'15px',
			'overflow':'visible',
			'height':'auto',
			'z-index': '1002',
			'right': '-450px'
		});
		$('.btn-switch').css({'display':'flex'});
		$('.btn-switch i').css({'display':'flex'});
		$('.btn-switch span').hide();
		$('.envelope__bottom').css({'margin-top':'200px'});
		$('.top').css({
			'transform': 'rotatex(180deg)',
			'z-index': '-1'
		});
		$('.envelope').css({
			'transform':'translateY(0px)',
			'overflow':'visible'
		});
		$('.popup-thanks').css({'transform':'translateY(-600px)'});
		$('.envelope__bottom--back').css({'background':'transparent'});
		$('.top, .bottom, .right, .left').hide();
		$("#form-popup").trigger('reset');
	}

	function ifClickOut(e) {
		$('.popup-container').click(function(e) {
			
		});
	}

	ifClickOut();

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