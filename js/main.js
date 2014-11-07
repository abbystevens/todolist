$(document).ready(function() {

	var list = [];
	var original;
	

	$('#addItem').on('click', function () {
		list.push($('#item').val());
		console.log("I see the add button, here's the new list: " + list); // Test add button/list.		
		$('#listItems').append('<li class="list-group-item">' + $('#item').val() +  '</li>');
		$('#item').val('');
	});


	$(document).on( 'click', function() {
  	$(event.target).closest('li').toggleClass('active');
	});

	
	$('#removeItem').on('click', function () {
		$('.active').hide().addClass('removed');
  });


	$("#listItems").on('dblclick', 'li', function () {
		
		original = $(this).text();
		$(this).text('');
		$('<input type="text">').appendTo(this).focus();
	});


	$("#listItems").on('focusout', 'li > input', function () {
		var $this = $(this);
		$this.parent().text($this.val() || original);
		$this.remove();
	});


  $('#done').on('click', function () {
  	$('.active').addClass('done');
  	$('.active').removeClass('active');
  });
    

	$('#clearCompleted').on('click', function () {
		$('.done').hide().removeClass('done').addClass('completed');
	});


	$('#showAll').on('click', function () {
		$('.completed').show();
		$('.removed').show();
	});


	$('#saveMyList').on('click', function () {
		$('.completed').show();
		$('.removed').show();
	});


});

