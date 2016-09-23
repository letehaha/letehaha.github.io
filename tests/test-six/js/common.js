$(function() {

	var slider = $('#main-slider');

	slider.slick({
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>	'
	});

	$('.toggle_menu').click(function() {
		$('.burger').toggleClass('active');
		$('.header-nav__list').slideToggle(400);
	});

	$('a').smoothScroll({
		speed: 600
	});

});