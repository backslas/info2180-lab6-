/* global $*/
$(function(){
	let it = [];
	let a = false;
	$("#index_s").click(function(){
		let s = $('#s_bar').val();
		s = s.toLowerCase();
		if(s != "" && it.indexOf(s) < 0 && a === false){
			$.ajax({
				url: "request.php",
				method: 'GET',
				data:{q:s},
				success: function(data){
					it.push(s);
					console.log(it);
					$("#results").append(data);
				},
				error:function(){
					alert('Word not found.')
				}
			});
		}
	 });

});