$(function() {

	$('#js-button-top, #js-button-header, #js-button-footer').click(function(){
		$.getJSON('http://jsonplaceholder.typicode.com/posts/1', {}, function(json){
			$('#js-title').html('');
			$('#js-title').append(json.title);
		});
	})
});