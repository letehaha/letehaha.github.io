$(function() {

	var bodyPage = $('body');

// page navigation

	bodyPage.sectionScroll();

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



// stick menu

	// var topNavigation = document.getElementById('nav-wrapper');

	// function onScroller() {
	// 	if(window.pageYOffset > 650){
	// 		setTimeout(function(){topNavigation.classList.add('nav-wrapper--bgc')}, 300);
	// 	} else{
	// 		setTimeout(function(){topNavigation.classList.remove('nav-wrapper--bgc')}, 300);
	// 	}
	// }

	// document.addEventListener('scroll', onScroller);

	//*************
	


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
			bulletsContainer = $('.burger-panel-list');

	$('#burger-top').click(function(e) {
		bulletsContainer.slideToggle(300);
		$(this).toggleClass('active');
		$('.bullets-container').toggleClass('bullets-container--translate');
		// slideContent.css({transform: 'translateX(-60%)'})
		// overfloWrapper.addClass('overflow-wrapper--hidden');
		// mainBurgerMenu.css({width: '60%'});
		// bulletsContainer.css({display: 'none'});
		// bodyPage.css({'overflow-y': 'hidden'});
  // 	e.preventDefault();
	});

	//****************



	// close burger-menu

	// $('#close-btn-nav').click(function(e) {
	// 	slideContent.css({transform: 'inherit'})
	// 	overfloWrapper.removeClass('overflow-wrapper--hidden');
	// 	mainBurgerMenu.css({width: '0'});
	// 	bulletsContainer.css({display: 'flex'});
	// 	bodyPage.css({'overflow-y': 'auto'});
 //  	e.preventDefault();
	// });

	//****************



	// effect elements list in open-burger menu

	$('.burger-panel__elem').hover(function() {
		$(this).children('.burger-panel__list').slideToggle();
	});

	//****************



	//use function fixmenu

	$(".nav-wrapper").fixmenu();

	//****************

	$('a.burger-panel__elem-link').smoothScroll({
		speed: 700
	});

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