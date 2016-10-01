$(function() {

	$('.slider-slides').slick({
		arrows: false,
		dots: false,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		adaptiveHeight: true
	})

	$('body').sectionScroll();

	var status = $('.pagingInfo');
	var slickElement = $('.slider-slides');

	slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		status.text(i + '/' + slick.slideCount);
	});

});