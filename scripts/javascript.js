$(document).ready(function(){
	//If the User resizes the window, adjust the #container height
	$(window).bind("resize", resizeWindow);
	function resizeWindow( e ) {
		var widthLimit = 800;
		var newWindowWidth = $(window).width();
		if (newWindowWidth < widthLimit)
		{
			$("body").css("width", "95%");
		}
		else
		{
			$("body").css("width", "50em");
		}
	}
});