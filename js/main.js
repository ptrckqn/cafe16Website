
//Smooth scrolling
$(document).ready(function() {
		$('a[href]').bind('click', function(e) {

				var target = $(this).attr("href");
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - 57 //Offset of scroll
				}, 800, function() {
						location.hash = target;
				});

				return false;
		});
});

$('#myModal').modal(options)
