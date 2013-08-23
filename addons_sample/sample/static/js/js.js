/* ekitjs static javascript file */
$(function(){
	$('button[name="submit"]').click(function(){
		$.ajax({
			type: 'post',
			url: '/create',
			data: {
				first: $('input[name="first"]').val(),
				last: $('input[name="last"]').val(),
				username: $('input[name="username"]').val(),
				password: $('input[name="password"]').val()
			},
			success: function(data){
				if(data.e){
					alert('error');
				}else{
					window.location.href = '/';
				};
			}
		});
	});
});
