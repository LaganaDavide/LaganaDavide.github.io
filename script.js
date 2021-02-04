var myScroll = function(str){
	let el = document.getElementById(str);
    el.scrollIntoView();
}

$(document).ready(function() {
	$('#send').click( function(event) {
		event.preventDefault(); // prevent reload
	    console.log("ok");
	    if ( $('#name').val() != "" , $('#email').val() != "", $('#message').val() != ""){
		    var data = {
			    service_id: 'service_p56xbdb',
			    template_id: 'template_cah7z8u',
			    user_id: 'user_Qqe9zWvIkuFPyoGoqtU1G',
			    template_params: {
			        'name': $('#name').val(),
			        'email': $('#email').val(),
			        'message': $('#message').val()
			    }
			};
			$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
			    type: 'POST',
			    data: JSON.stringify(data),
			    contentType: 'application/json'
			}).done(function() {
			    alert('Your mail is sent!');
			}).fail(function(error) {
			    alert('Oops... ' + JSON.stringify(error));
			});
	    }else{
	    	alert("insert first")
	    }
	});
});