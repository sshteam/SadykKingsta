$(document).ready(function(){
	var list = getList();
	list.forEach(function(item){
		$('#todolist').append('<li>'+item+'</li>');
	});
});

function clearTodo() {
	localStorage.todo = JSON.stringify(new Array());
}

function getList() {
	return localStorage.todo ? JSON.parse(localStorage.todo) : new Array();
}

function setItem(item) {
	var list = getList();
	list.push(item);
	localStorage.todo = JSON.stringify(list);
}

function send() {
	var todo = $('#todo').val();
	if (todo == '') return false;
	setItem(todo);
}