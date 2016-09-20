$(function() {
	var bodyPage = $('body');

	bodyPage.sectionScroll();

// функционал показа кнопки ВВЕРХ
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


// функционал скрытия верхнего нава

	var topNavigation = document.querySelector('#nav-wrapper');

	function hideTopNav(e){
		if(document.body.scrollTop > 300){
			topNavigation.classList.add('top-nav-menu-close');
		} else{
			topNavigation.classList.remove('top-nav-menu-close');
		}
	};

	document.addEventListener('scroll', hideTopNav);

//**************

// прилипающее меню

var prevPosition = 700;

function onScroller() {
	var st = $(this).scrollTop();
	if (st > prevPosition) {
	 topNavigation.classList.add('top-nav-menu-close');
	} else {
	 topNavigation.classList.remove('top-nav-menu-close');
	}
	prevPosition = st;
}

document.addEventListener('scroll', onScroller);

//*************
	
	
	var bodyScrollArrows = $('html,body');

	$('#page-scroll-top').click(function(e) { // кнопка вверх
  	e.preventDefault();
		bodyScrollArrows.stop().animate({ scrollTop: $('#header').offset().top }, 500);
	});

	$('#btn-down').click(function(e) { // кнопка вниз
  	e.preventDefault();
		bodyScrollArrows.stop().animate({ scrollTop: $('#scrollto-section-1').offset().top }, 400);
	});

	var mainBurgerMenu = $('.main-burger-menu'),
			bulletsContainer = $('.bullets-container'),
			slideContent = $('.slide-content'),
			overfloWrapper = $('.overflow-wrapper');

	$('#burger-top').click(function(e) { //открытие главного меню
		slideContent.css({transform: 'translateX(-60%)'})
		overfloWrapper.addClass('overflow-wrapper--hidden');
		mainBurgerMenu.css({width: '60%'});
		bulletsContainer.css({display: 'none'});
		bodyPage.css({'overflow-y': 'hidden'});
  	e.preventDefault();
	});

	$('#close-btn-nav').click(function(e) { //закрытие главного меню
		slideContent.css({transform: 'translateX(0)'})
		overfloWrapper.removeClass('overflow-wrapper--hidden');
		mainBurgerMenu.css({width: '0'});
		bulletsContainer.css({display: 'flex'});
		bodyPage.css({'overflow-y': 'auto'});
  	e.preventDefault();
	});

	$('.burger-panel__elem').hover(function() {
		$(this).children('.burger-panel__list').slideToggle();
	});

});