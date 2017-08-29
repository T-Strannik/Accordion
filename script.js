(function($){
	
	$('h3:eq(0)').click(function(){
		$('div>#n1 p').slideDown(500);
		$('div>#n1 div').css('background-color', '#007FFF');
		$('div>#n1 h3').css('color', '#fff');

		$('div>#n2 p').slideUp(500);
		$('div>#n2 div').css('background-color', '#fff');
		$('div>#n2 h3').css('color', '#000');


		$('div>#n3 p, div>#n3 ul').slideUp(500);
		$('div>#n3 div').css('background-color', '#fff');
		$('div>#n3 h3').css('color', '#000');


		$('div>#n4 p').slideUp(500);
		$('div>#n4 div').css('background-color', '#fff');
		$('div>#n4 h3').css('color', '#000');

	});

	$('h3:eq(1)').click(function(){
		$('div>#n1 p').slideUp(500);
		$('div>#n1 div').css('background-color', '#fff');
		$('div>#n1 h3').css('color', '#000');


		$('div>#n2 p').slideDown(500);
		$('div>#n2 div').css('background-color', '#007FFF');
		$('div>#n2 h3').css('color', '#fff');


		$('div>#n3 p, div>#n3 ul').slideUp(500);
		$('div>#n3 div').css('background-color', '#fff');
		$('div>#n3 h3').css('color', '#000');


		$('div>#n4 p').slideUp(500);
		$('div>#n4 div').css('background-color', '#fff');
		$('div>#n4 h3').css('color', '#000');

	});

	$('h3:eq(2)').click(function(){
		$('div>#n1 p').slideUp(500);
		$('div>#n1 div').css('background-color', '#fff');
		$('div>#n1 h3').css('color', '#000');


		$('div>#n2 p').slideUp(500);
		$('div>#n2 div').css('background-color', '#fff');
		$('div>#n2 h3').css('color', '#000');


		$('div>#n3 p, div>#n3 ul').slideDown(500);
		$('div>#n3 div').css('background-color', '#007FFF');
		$('div>#n3 h3').css('color', '#fff');


		$('div>#n4 p').slideUp(500);
		$('div>#n4 div').css('background-color', '#fff');
		$('div>#n4 h3').css('color', '#000');

	});

	$('h3:eq(3)').click(function(){
		$('div>#n1 p').slideUp(500);
		$('div>#n1 div').css('background-color', '#fff');
		$('div>#n1 h3').css('color', '#000');


		$('div>#n2 p').slideUp(500);
		$('div>#n2 div').css('background-color', '#fff');
		$('div>#n2 h3').css('color', '#000');


		$('div>#n3 p, div>#n3 ul').slideUp(500);
		$('div>#n3 div').css('background-color', '#fff');
		$('div>#n3 h3').css('color', '#000');


		$('div>#n4 p').slideDown(500);
		$('div>#n4 div').css('background-color', '#007FFF');
		$('div>#n4 h3').css('color', '#fff');

	});



})(jQuery)
