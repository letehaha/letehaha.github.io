$(function() {

	$("a[href*='#']").mPageScroll2id();

 	$(".burger-menu").click(function (e) {
		$(this).toggleClass("menu-on");
		$('.burger-list').fadeToggle('burger-list-active');
		$('.burger_elem').click(function(e) {
			$(".burger-menu").toggleClass("menu-on");
			$('.burger-list').fadeToggle('burger-list-active');
		});
	});
});