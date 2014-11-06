$(document).ready(function() {

	var list = [];
	

	$('#addItem').on('click', function () {
		list.push($('#item').val());
		console.log("I see the add button, here's the new list: " + list); // Test add button/list.	
		clearBoxShowList();
	});

	$( document ).on( "click", function( event ) {
  	$( event.target ).closest( "li" ).toggleClass( "active" );
	});
	
	$('#removeItem').on('click', function () {
		$('.active').hide().addClass('removed');
  });

	/*$('#edit').on('click', function () {
		$('.active').replaceWith.$("#item");
	})

*/

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


	function clearBoxShowList () {
		console.log("I see clearBoxShowList"); //Test function call.

		//$('#listDisplay').append("<h5>" + $('#item').val() + "</h5>");
		$('#list').append('<li class="list-group-item">' + $('#item').val() +  '</li>');
	}
});

