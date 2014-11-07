
$(document).ready(function() {

	var counter = 0;

	function List (name, items) {
		this.name = name;
		this.items = items;
	}


	$('#save').on('click', function () {
		counter++;

		var list1 = new List($('#listName').val(), $('#savedLists').val());

		console.log("I see you save button!" + list1.name + list1.items);
		$('#savedLists').append('<li>' + list1.name + '</li>');
		$('#myModal').modal('hide');
		localStorage.setItem('name', list1.name);
		localStorage.setItem('listItems', list1.items);
	});

	
});