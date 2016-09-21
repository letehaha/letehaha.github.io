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


// // прилипающее меню

	var topNavigation = document.getElementById('nav-wrapper');

	function onScroller() {
		if(window.pageYOffset > 650){
			setTimeout(function(){topNavigation.classList.add('nav-wrapper--bgc')}, 300);
		} else{
			setTimeout(function(){topNavigation.classList.remove('nav-wrapper--bgc')}, 300);
		}
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
		slideContent.css({transform: 'inherit'})
		overfloWrapper.removeClass('overflow-wrapper--hidden');
		mainBurgerMenu.css({width: '0'});
		bulletsContainer.css({display: 'flex'});
		bodyPage.css({'overflow-y': 'auto'});
  	e.preventDefault();
	});

	$('.burger-panel__elem').hover(function() {
		$(this).children('.burger-panel__list').slideToggle();
	});

	$(".nav-wrapper").fixmenu();
});

$.fn.fixmenu = function() {
    //фикс топ меню при скролле
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
		if (scrollTop < 350) {
			menuSelector.addClass('nav-wrapper');
			return
		}   
		if (st > scrollPos){
		//если вкролл вниз
			menuSelector.removeClass('nav-wrapper');
		} else {
		//если скролл вверх
			if (scrollTop < 650) {
				menuSelector.removeClass('nav-wrapper');
				return
			}  
		menuSelector.addClass('nav-wrapper', 'nav-wrapper--bgc');
		}
	scrollPos = st;
	}
}


  
