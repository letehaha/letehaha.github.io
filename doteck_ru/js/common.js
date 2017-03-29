$(function() {

	$('.productions__tab').click(function() {
		$('.productions__tab').removeClass('active');
		$(this).addClass('active');
	});
	$('.js-image-full').click(function() {
		var link = $(this).attr('src');
		$('#owerlay').fadeIn();
		$('.owerlay__img').attr('src', link);
	});
	$('#owerlay').click(function() {
		$(this).fadeOut();
	});
	$('.js-close').click(function() {
		$('.popup').fadeOut();
	});
	$('.js-get-scheme').click(function() {
		$('#js-get-scheme').fadeIn();
		$('.popup').addClass('is-show');
	});
	$('.js-get-call').click(function() {
		$('#js-get-call').fadeIn();
		$('.popup').addClass('is-show');
	});
	$('.js-get-commercial').click(function() {
		$('#js-get-commercial').fadeIn();
		$('.popup').addClass('is-show');
	});
	$('.js-get-consult').click(function() {
		$('#js-get-consult').fadeIn();
		$('.popup').addClass('is-show');
	});
	$('.nav__item-link').click(function(e) {
		var link = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(link).offset().top }, 500);
		e.preventDefault();
	});
	$('.form-submit').submit(function(e) {
		$('.popup').fadeOut();
		$('#thanks').fadeIn();
		$('.popup').addClass('is-show');
		setTimeout(function(){
			$('#thanks').fadeOut();
			$('.popup').remove('is-show');
		},3000);
		var data = $('.form-submit-text').attr('data-text');
		$('.popup-thanks-content').text(data);
		return false;
	});
	
	$(document).mouseup(function (e){
		if($('.popup').hasClass('is-show')){
			var div = $('.popup-form_wrapper-content');
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				$('.popup').hide();
				$('.popup').remove('is-show');
			};
		}
	});
	

	$('.partners-list__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		arrows: true,
		nextArrow: '<button class="partners-list__slider-nav partners-list__slider-next"></button>',
		prevArrow: '<button class="partners-list__slider-nav partners-list__slider-prev"></button>',
		responsive: [{
			breakpoint: 910,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
	$('.productions__descr').equivalent();
});

$.fn.equivalent = function (){
	var $blocks = $(this),
	maxH = $blocks.eq(0).height();
	$blocks.each(function(){
		if ( $(this).height() > maxH ) {
			maxH = $(this).height();
		}
	});
	$blocks.height(maxH); 
}