//начальная позиция
var pos = 0;
//номер слайда
var totalSlides = document.getElementsByClassName('slide').length;
//получить ширину слайда
var sliderWidth = document.getElementById('slider-wrap').offsetWidth;
var sliderLine = document.getElementById('slider');
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider').css('left', -(sliderWidth*pos));
	//sliderLine.style.left = -(sliderWidth*pos);

	countSlides();
	pagination();
};

function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0;}
	$('#slider').css('left', -(sliderWidth*pos)); 
	//sliderLine.style.left = -(sliderWidth*pos);

	countSlides();
	pagination();
};

function countSlides(){
	// document.getElementById('counter').document.body(pos+1 + ' / ' + totalSlides);
	$('#counter').html(pos+1 + ' / ' + totalSlides);
};
countSlides();


function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
};
pagination();



$(document).ready(function(){
	
	$.mobile.loading().hide();
	//ширина слайдера зависит от количества слайдов

	// sliderLine.style.width = sliderWidth*totalSlides
	$('#slider').width(sliderWidth*totalSlides);
	
	//следующий слайд
	document.getElementById('next').onclick = slideRight;
	//предыдущий слайд
	document.getElementById('previous').onclick = slideLeft;

	// window.onload = function() {
	// 	document.getElementsByClassName('btns').style.background = "red";
	// };
	
	//переключение слайдов по стрелкам
	$(document).on('keydown', function(e){
		if (e.keyCode === 37 || e.keyCode === 40)  slideLeft();
		else if (e.keyCode === 39 || e.keyCode === 38) slideRight();
	});


	//только для тач девайсов
	function is_touch_device(){
		return (('ontouchstart' in window)
			|| (navigator.MaxTouchPoints > 0)
			|| (navigator.msMaxTouchPoints > 0)); //если количество тач касаний > 0, то экран сенсорный
	};


  if (is_touch_device()){
		$('#slider-wrap ul li').on('swipeleft', function(e) {
			slideRight();
		});
		$('#slider-wrap ul li').on('swiperight', function(e) {
			slideLeft();
		});
		$('.btns').css('background-color', "red"); //!!!!!!!!!!!
	} else{
		false
	};

	//автоматическая прокрутка
	// var autoSlider = setInterval(slideRight, 3000);
	
	//создание пагинации для каждого слайда
	$.each($('#slider li'), function(){
	   var li = document.createElement('li');
	   // document.getElementById('pagination-wrap').firstChild.className = 'active';
	   $('#pagination-wrap ul').append(li); 
	});
	
});