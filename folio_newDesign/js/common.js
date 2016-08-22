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
		setTimeout(function(){
			$('.progress-bar-sass').css({'width': '75%'});
			$('.progress-bar-boot').css({'width': '65%'});
			$('.progress-bar-jade').css({'width': '45%'});
			$('.progress-bar-git').css({'width': '85%'});
			$('.progress-bar-per').css({'width': '75%'});
			$('.progress-bar-an').css({'width': '70%'});
		}, 200);
		setTimeout(function() {
			$('.js-bar-count').countTo();
		}, 300);
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
		}, 100);
		setTimeout(function(){
			$('.contact-left_copy').css({
				'opacity': '1',
				'-webkit-transform': 'translateY(0)',
				'transform' : 'translateY(0)'
			});
		}, 100);
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


	var $ppc = $('.progress-pie-chart'),
	    percent = parseInt($ppc.data('percent')),
	    deg = 360*percent/100;
	  if (percent > 50) {
	    $ppc.addClass('gt-50');
	  }
	  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
	  $('.ppc-percents span').html(percent + '%');

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

	$('#contact-form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: 'https://formspree.io/letehaha@gmail.com', 
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json'
		}).done(function() {
			var $this = $('.contact-form_submit');
			if($this.hasClass('active') || $this.hasClass('success')) {
				return false;
			}
			$this.addClass('active');
			setTimeout(function() {
				$this.addClass('loader');
			}, 125);
			setTimeout(function() {
				$this.removeClass('loader active');
				$this.val('Готово');
				$this.addClass('success animated pulse');
			}, 1600);
			setTimeout(function() {
				$this.val('Отправить');
				$this.removeClass('success animated pulse');
				$this.blur();
			}, 2900);
			setTimeout(function() {
				$('#contact-form').trigger('reset');
			}, 2200);
		});
	});

});