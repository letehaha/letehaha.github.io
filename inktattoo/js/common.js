$(function() {
	$('.main-nav_elem a').smoothScroll();
});

////////// first slider

var slides_first = document.querySelectorAll('.testimonial_slide_first');
var currentSlide_first = 0;
var slideInterval_first = setInterval(nextSlide_first,5000);

function nextSlide_first() {
    slides_first[currentSlide_first].className = 'testimonial_slide_first';
    currentSlide_first = (currentSlide_first+1)%slides_first.length;
    slides_first[currentSlide_first].className = 'testimonial_slide_first showing';
}

////////// second slider

var slides_second = document.querySelectorAll('.testimonial_slide_second');
var currentSlide_second = 0;
var slideInterval_second = setInterval(nextSlide_second,5000);

function nextSlide_second() {
    slides_second[currentSlide_second].className = 'testimonial_slide_second';
    currentSlide_second = (currentSlide_second+1)%slides_second.length;
    slides_second[currentSlide_second].className = 'testimonial_slide_second showing';
}

//////// google maps api

function initMap() {

  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 10 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.773718, lng: -118.206581},
    scrollwheel: false,
    styles: styleArray,
    zoom: 12,
    disableDefaultUI: true,
    zoomControl: true
  });
  var image = '../img/map_marker.png';
  var marker = new google.maps.Marker({
    position: {lat: 33.772006, lng: -118.209327},
    map: map,
    icon: image
  });
};