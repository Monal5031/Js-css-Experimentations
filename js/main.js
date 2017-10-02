function main () {
	$('.skillset').hide();
	$('.skillset').fadeIn(1000);
	$('.projects').hide();
	$('.projects-button').on('click', function () {
		$(this).next().slideToggle(400);
		$(this).toggleClass('active');
		$(this).text('Projects Viewed');
	});
	$('#colorPickerLi').click( function() {
		$('#colorPickerDisplay').toggleClass('hide');

		if ($('#arrow').hasClass('glyphicon-chevron-down')) {
			$('#arrow').removeClass('glyphicon-chevron-down');
			$('#arrow').addClass('glyphicon-chevron-up');
		} else {
			$('#arrow').removeClass('glyphicon-chevron-up');
			$('#arrow').addClass('glyphicon-chevron-down');
		}
		
	});
}
$(document).ready(main);
