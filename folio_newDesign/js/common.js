$(function() {
	$('.folio').click(function(e) {
		$(this).css({"transform":"translateY(0)"});
		$('.exp').css({"transform":"translateX(115%)"});
		$('.contact').css({"transform":"translateY(105%)"});
	});

	$('.exp').click(function(e) {
		$(this).css({"transform":"translateX(0)"});
		$('.folio').css({"transform":"translateY(-105%)"});
		$('.contact').css({"transform":"translateY(105%)"});
	});

	$('.contact').click(function(e) {
		$(this).css({"transform":"translateY(0)"});
		$('.exp').css({"transform":"translateX(115%)"});
		$('.folio').css({"transform":"translateY(-105%)"});
	});
});