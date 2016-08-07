$(function() {

	$(".folio-nav_list li").click(function() {
		$(".folio-nav_list li").removeClass("active");
		$(this).addClass("active");
	});


	$('#contact-form .contact-form_input').focusout(function(){
		var any_input = $(this).val();
		if(any_input === ""){
			$(this).removeClass('has-value'); 
		}
		else { 
			$(this).addClass('has-value'); 
		}
	});
	$('#contact-form textarea').focusout(function(){
		var any_input = $(this).val();
		if(any_input === ""){
			$(this).removeClass('has-value'); 
		}
		else { 
			$(this).addClass('has-value'); 
		}
	});

	$('#page-1').click(function(e) {
		$('.folio').css({"display":"flex"});
		$('.exp').hide();;
		$('.contact').hide();;
		$('.main-socials').show();
	});

	$('#page-2').click(function(e) {
		$('.folio').hide();;
		$('.exp').css({"display":"flex"});
		$('.contact').hide();;
		$('.main-socials').show();
	});

	$('#page-3').click(function(e) {
		$('.folio').hide();;
		$('.exp').hide();;
		$('.contact').css({"display":"flex"});
		$('.main-socials').hide();
	});
});