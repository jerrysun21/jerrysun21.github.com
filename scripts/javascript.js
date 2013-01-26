$(document).ready(function(){

	$("#blog-title").css('marginLeft', $('#body_style').css('marginLeft'));
	$("#links").css('marginRight', $("#body_style").css('marginRight'));

	if ($(window).width() < 820)
	{
		$("#body_style").css("width", "97.5%");
	}
	else
	{
		$("#body_style").css("width", "50em");
	}

	//If the User resizes the window, adjust the #container height
	$(window).bind("resize", resizeWindow);
	function resizeWindow( e ) {
		var widthLimit = 820;
		var newWindowWidth = $(window).width();
		var left_Marg = $('#body_style').css('marginLeft');
		if (newWindowWidth < widthLimit)
		{
			$("#body_style").css("width", "97.5%");
		}
		else
		{
			$("#body_style").css("width", "50em");
		}
		$("#blog-title").css('marginLeft', left_Marg);
		$("#links").css('marginRight', $("#body_style").css('marginRight'))
	}
});