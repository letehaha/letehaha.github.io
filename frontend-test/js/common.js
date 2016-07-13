$(function() {

// btn add in header

	$(".btn-add").click(function(){
		if ($(".popup__btn-add").is(":visible")){
			$(".popup__btn-add").hide();
		} else{
			$(".popup__btn-add").show();
		};
	});

	$('.popup_close-btn').click(function(){
		$(".popup__btn-add").hide();
	});
	$('.popup-c_close-btn').click(function(){
		$(".popup__calendar").hide();
		if($('.calendar-name_p').hasClass('active_click'))
			$('.calendar-name_p').removeClass('active_click');
	});
	
// END btn add in header
// active effect when calendar item in focus

	var calendarElem = $('.calendar-elem');

  for (var i = 0; i < calendarElem.length; i++) {
	  calendarElem[i].addEventListener('click', effectElem(i));
	};

	function effectElem(i){
	  return function () {
	  	if(calendarElem[i].classList.contains('active_click')){
	  		calendarElem[i].classList.remove('active_click');
	  	} else{
	    	calendarElem[i].classList.add('active_click');
	  	};
	  };
	};


// END active effect when calendar item in focus

	// $('.calendar-name_p').click(function(){
	// 	if($('.calendar-name_p').children().length == 1){
	// 		if($(this).hasClass('active_click')){
	// 			$('.popup__calendar').show();
	// 		}else{
	// 			$('.popup__calendar').hide();
	// 		};
	// 	}else {
	// 		if($(this).hasClass('active_click')){
	// 			$('.popup__demo').show();
	// 		}else{
	// 			$('.popup__demo').hide();
	// 		};
	// 	}
	// });

	$('.calendar-name_p').click(function() {
		if($(this).hasClass('active_click')){
			$('.popup__calendar').show();
		} else{
			$('.popup__calendar').hide();
		}
	});

	$('#today').click(function() {
		$('.active_today').addClass('active_click');
	});


	// var submitBtn =  document.getElementById('cp-submit');

	// submitBtn.onclick = function() {
	// 	var popEvent = document.forms["popup__form"].elements["event"].value,
	// 			popDate  = document.forms["popup__form"].elements["date"].value,
	// 			popParty = document.forms["popup__form"].elements["party"].value,
	// 			popDescr = document.forms["popup__form"].elements["descr"].value,
	// 			articleDay = '<p id="ar-event">' + popEvent + '</p><p id="ar-date">' + popDate + '</p><p id="ar-party">' + popParty + '</p><p id="ar-descr">' + popDescr + '</p>',
	// 			newArticle = document.createElement('article'),
	// 			parentElem = document.getElementById('calendar-name');

	// 	newArticle.innerHTML = articleDay;
	// 	parentElem.appendChild(newArticle);

	// };

});