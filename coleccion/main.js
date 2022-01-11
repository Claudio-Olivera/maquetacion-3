$(document).ready(function(){
	var altura = $('.wrap__menu').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura){
			$('.wrap__menu').addClass('wrap__menu-fixed');
		} else {
			$('.wrap__menu').removeClass('wrap__menu-fixed');
		}
	});

});