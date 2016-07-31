//начальная позиция
var pos = 0;
//номер слайда
var totalSlides = $('#slider-wrap ul li').length;
//получить ширину слайда
var sliderWidth = $('#slider-wrap').width();

function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	

	countSlides();
	pagination();
}

function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 

	countSlides();
	pagination();
}

function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}
countSlides();


function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
pagination();
	


$(document).ready(function(){
	
	$.mobile.loading().hide();
	//ширина слайдера зависит от количества слайдов
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //следющий слайд	
	$('#next').click(function(){
		slideRight();
	});
	
	//предыдущий слайд
	$('#previous').click(function(){
		slideLeft();
	});
	
	//переключение слайдов по стрелкам
	$(document).on('keydown', function(e) {
		if (e.keyCode === 37 || e.keyCode === 40)  slideLeft();
		else if (e.keyCode === 39 || e.keyCode === 38) slideRight();
	});

	$('#slider-wrap ul li').on('swipeleft', function(event) {
		slideRight();
	});

	$('#slider-wrap ul li').on('swiperight', function(event) {
		slideLeft();
	});


	//автоматическая прокрутка
	// var autoSlider = setInterval(slideRight, 3000);
	
	//создание пагинации для каждого слайда
	$.each($('#slider-wrap ul li'), function() {
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});

	
	//показать/спрятать кнопки когда hover
	//пауза автоматической прокрутки когда hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
});