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
		if($('.calendar-name').hasClass('active_click'))
			$('.calendar-name').removeClass('active_click');
	});
	
	function storeid(){
	  var className = document.getElementsByClassName('calendar-elem');
		var popup = document.getElementById('popup__calendar');
		
	  for (var i = 0; i < className.length; i++) {
		  className[i].addEventListener('click', effectElem(i));
		};
		
		function effectElem(i){
		  return function () {
	  	  for (var j = 0; j < className.length; j++) {
	  	  	if(className[j].classList.contains('active_click')){
			  		className[j].classList.remove('active_click');
			  	}
				};

				popup.style.left = className[i].offsetLeft + 200 + 'px';
		  	popup.style.top = className[i].offsetTop + 'px';

		  	if(className[i].classList.contains('active_click')){
		  		className[i].classList.remove('active_click');
		  		$('.popup__calendar').hide();
		  	} else{
		    	className[i].classList.add('active_click');
		    	$('.popup__calendar').show();
		  	};

				var popBtnAdd = document.getElementById('cp-submit'),
						popBtnDel = document.getElementById('cp-reset');

				popBtnAdd.onclick = function popupAdd() {
					var popEvent = document.forms["popup__form"].elements["event"].value,
							popDate  = document.forms["popup__form"].elements["date"].value,
							popParty = document.forms["popup__form"].elements["party"].value,
							popDescr = document.forms["popup__form"].elements["descr"].value,
							articleDay = '<p id="ar-event" class="ar-event">' + popEvent + '</p><p id="ar-date" class="ar-date">' + popDate + '</p><p id="ar-party" class="ar-party">' + popParty + '</p><p id="ar-descr" class="ar-descr">' + popDescr + '</p>',
							newArticle = document.createElement('article'),
							parentElem = className[i];

					newArticle.setAttribute('id', 'artc_pop');
					newArticle.innerHTML = articleDay;
					parentElem.appendChild(newArticle);
				};

				popBtnDel.onclick =	function popupDelete() {
					var articleAll = document.getElementById('artc_pop');
					articleAll.parentNode.removeChild(articleAll);
				};
		  };
		};
	};
	storeid();

	$('#today').click(function() {
		$('.active_today').addClass('active_click');

	});




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