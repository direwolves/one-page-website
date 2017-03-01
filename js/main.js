// first see if it exists
var OPW = OPW || {};

OPW.utilities = {
	listen: function(){
		$('.js-menu').on('click', function(){     
			$('.nav-main').slideToggle();   
		});

		$(window).on('resize', function(){    
			var w = $(window).width();

			// write an if statement, if width is > 480, do something    
			if(w > 480 && $('.nav-main').is('[style]')){
			console.log('removed style');        
				$('.nav-main').removeAttr('style');    
			} 
		}); // closes window resize event
	} 
}

console.log(OPW);

$(document).ready(function(){
	OPW.utilities.listen(); 
	


	// attach click event to main-nav item
	$('.nav-main a').on('click', function(event){
		alert('hello');
		console.log(event);
		// event.preventDefault();
		console.log($(this).attr('href'));
		// store $(this).attr('href') in a variable
		var pageToScrollTo = $(this).attr('href');
		// use that variable inour $.scrollTo() function
		$(window).scrollTo(pageToScrollTo, 5000);
	})
// })
	
// console.log(OPW);

// $(document).ready(function(){
// 	OPW.utilities.listen();


}); // closes doc.ready

