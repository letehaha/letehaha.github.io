$(function() {

	$('.folio-nav_list li').click(function(e) {
		var all_another = $('.folio-nav_list li');
		all_another.removeClass('active');
		all_another.addClass('no-active');
		$(this).addClass('active');
		$(this).removeClass('no-active')
	});

	$('#contact-form .contact-form_input, #contact-form textarea').focusout(function(e){
		var any_input = $(this).val();
		if(any_input === ""){
			$(this).removeClass('has-value'); 
		}
		else { 
			$(this).addClass('has-value'); 
		};
	});

	$('#page-1').click(function(e) {
		$('.folio').css({'display':'flex'});
		$('.exp').hide();
		$('.contact').hide();
		$('.main-socials').css({
			'height':'70px',
			'padding':'15px',
			'margin-bottom':'0px'
		});
	});

	$('#page-2').click(function(e) {
		$('.folio').hide();
		$('.exp').css({'display':'flex'});
		$('.contact').hide();
		$('.main-socials').css({
			'height':'70px',
			'padding':'15px',
			'margin-bottom':'0px'
		});
	});

	$('#page-3').click(function(e) {
		$('.folio').hide();
		$('.exp').hide();
		$('.contact').css({'display':'flex'});
		$('.main-socials').css({
			'height':'0px',
			'padding':'0px',
			'margin-bottom':'-40px'
		});
		setTimeout(function(){
			$('.contact-left_tel,.contact-left_soc').css({
				'opacity': '1',
				'-webkit-transform': 'translateX(0)',
				'transform' : 'translateX(0)'
			});
		}, 200);
		setTimeout(function(){
			$('.contact-left_copy').css({
				'opacity': '1',
				'-webkit-transform': 'translatey(0)',
				'transform' : 'translatey(0)'
			});
		}, 200);
	});

	function folioChangeStyles(el, mouseenter) {
	  $('.folio-work_btn', el)
	  .css({
	    'background-color': mouseenter ? 'rgba(3,156,253,1)' : 'inherit',
	    'color'           : mouseenter ? '#fff' : 'rgba(3,156,253,1)',
	    'font-weight'     : mouseenter ? 300 : 400
	  });
	};
	$('.folio-work').on('mouseenter mouseout', 'a:first-child', function(e) {
	  folioChangeStyles(e.delegateTarget, (e.type === 'mouseenter'));
	});

	$("#contact-form").validationEngine('attach',{
			promptPosition : "bottomLeft", maxErrorsPerField : 1,
			showArrow : false, 'custom_error_messages':{
				'#contact-name' : {
					'required' : {
						'message' : "* Это поле обязательно."
					},
					'minSize' : {
						'message' : "* Какое-то коротковатое имя."
					}
				},
				'#contact-email' : {
					'required' : {
						'message' : "* Это поле обязательно."
					},
					'custom[email]' : {
						'message' : "* Тут где-то ошибка."
					}
				},
				'#contact-text' : {
					'required' : {
						'message' : "* Это поле обязательно."
					},
					'minSize' : {
						'message' : "* Серьезно, так мало?"
					}
				}
			}
		});

});