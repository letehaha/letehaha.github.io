$(function() {
	$('.folio').click(function(e) {
		$(this).css({"transform":"translate(0)"});
		$('.exp').css({"transform":"translateX(115%)"});
		$('.contact').css({"transform":"translateY(105%)"});
	});

	$('.exp').click(function(e) {
		$(this).css({"transform":"translate(0)"});
		$('.folio').css({"transform":"translateY(-105%)"});
		$('.contact').css({"transform":"translateY(105%)"});
	});

	$('.contact').click(function(e) {
		$(this).css({"transform":"translate(0)"});
		$('.exp').css({"transform":"translateX(105%)"});
		$('.folio').css({"transform":"translateY(-105%)"});
	});

	$('.arrow').click(function(e) {
		e.stopPropagation();
		$('.exp').css({"transform":"translateX(105%)"});
		$('.folio').css({"transform":"translateY(-95%)"});
		$('.contact').css({"transform":"translateY(95%)"});
	});
});