$(document).ready(function() {
	$('[data-toggle="tooltip"]').each(function(){
		$(this).tooltip();
	});
	$('[data-toggle="popover"]').each(function(){
		$(this).tooltip({
			trigger: 'focus',
			triggerOff: 'blur'
		});
	});
	$('.slider').slider();
	
	$('#enteredName').text(localStorage['name']);
	$('#enteredSurname').text(localStorage['surname']);
	
});

function send() {
	localStorage.setItem('name', $('#name').val());
	localStorage.setItem('surname', $('#surname').val());
}