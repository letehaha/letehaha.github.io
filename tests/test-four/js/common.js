$(function() {

	$('.main-slider').slick({
		arrows : false,
		dots : true
	});

	
	$('#lang').hover(
		function(){
			$('.lang i').addClass('active-arrow');
			$('.js-lang-list').stop().slideToggle(400);
		},
		function(){
			$('.lang i').removeClass('active-arrow');
			$('.js-lang-list').stop().slideToggle(400);
		}
	);

	function sidebar() {
		if ($(window).width() < 1000) {
			$('.services-title').click(
				function(){
					$('.services-list').stop().slideToggle(400);
				}
			);

			$('.projects-title').click(
				function(){
					$('.projects-list').stop().slideToggle(400);
				}
			);

		}	
	}
	sidebar();

	function removeNameBr() {
		if ($(window).width() < 800) {
			$('.news-item_name h3').find('br').remove();

		}	
	}
	removeNameBr();

	$(window).resize(function (e) {
		e.stopPropagation();
		removeNameBr();
		sidebar();
	});

	$('.toggle-menu').click(function() {
		$('.burger').toggleClass('active');
		$('.main-nav').slideToggle(400);
	});

	$('.js-lang-list li').on('click', function(){
		var lang = $(this).text();
		$('#lang .js-lang-selected').text(lang);
	});

	$('.news-iframe').click(function(e){
		var modal = $(this).find('.modal');
		var youtubeSrc = modal.data('youtube');
		var tubeIframe = $(this).find('.js-news-iframe-item');

		modal.toggleClass('is-visible');

		if( modal.css('display') == 'flex'){
			tubeIframe.attr('src', youtubeSrc);
		} else {
			tubeIframe.removeAttr('src');
		}
	});

});