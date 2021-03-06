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
		setTimeout(function(){
      var counterUp = $('.js-bar-count-sass');
      var dataBar = $('.js-bar-count-sass').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-boot');
      var dataBar = $('.js-bar-count-boot').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-jade');
      var dataBar = $('.js-bar-count-jade').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-git');
      var dataBar = $('.js-bar-count-git').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-per');
      var dataBar = $('.js-bar-count-per').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-an');
      var dataBar = $('.js-bar-count-an').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-html');
      var dataBar = $('.js-bar-count-html').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-css');
      var dataBar = $('.js-bar-count-css').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-js');
      var dataBar = $('.js-bar-count-js').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-jquery');
      var dataBar = $('.js-bar-count-jquery').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-psh');
      var dataBar = $('.js-bar-count-psh').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
      var counterUp = $('.js-bar-count-wp');
      var dataBar = $('.js-bar-count-wp').data('count');
      counterUp.counter({
        duration: 1500,
        countTo: dataBar,
        placeholder: 0,
        easing: 'easeOutQuad'
      });
		}, 100);
		setTimeout(function(){
			$('.js-svg-bar-html circle:nth-child(2)').css({
				'stroke-dashoffset' : '-354'
			})
		}, 200);
		setTimeout(function(){
			$('.js-svg-bar-css circle:nth-child(2)').css({
				'stroke-dashoffset' : '-335.7'
			})
		}, 200);
		setTimeout(function(){
			$('.js-svg-bar-js circle:nth-child(2)').css({
				'stroke-dashoffset' : '-205.38'
			})
		}, 200);
		setTimeout(function(){
			$('.js-svg-bar-jquery circle:nth-child(2)').css({
				'stroke-dashoffset' : '-242.72'
			})
		}, 200);
		setTimeout(function(){
			$('.js-svg-bar-psh circle:nth-child(2)').css({
				'stroke-dashoffset' : '-261.39'
			})
		}, 200);
		setTimeout(function(){
			$('.js-svg-bar-wp circle:nth-child(2)').css({
				'stroke-dashoffset' : '-112.02'
			})
		}, 200);
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
			}, 3400);
			setTimeout(function() {
				$('#contact-form').trigger('reset');
			}, 2200);
		});
	});

});