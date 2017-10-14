function main () {
	$('.skillset').hide();
	$('.skillset').fadeIn(1000);
	$('.projects').hide();
	$('.music').hide();
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

	function getData(){
		var div = $('.music');
		$.ajax({
		    type: 'GET',
		    url: 'js/data.json',
		    dataType: 'json',
		    success: function (data) {
					// Was this successful?

					$.each(data.music, function(index, i) {
						div.append('<div class="' + index + '"><h2>' + index + '</h2></div><div class="clearfix">');
						var array = [i][0];
						$(array).each(function (i, element){
							var newClass = "." + index;
							$(newClass).append('<div class="music-track"><img src="' + element.img + '"/><br/><a class="music-link" href="' + element.link + '" target="_blank">' + element.name + '</a><div>');
						});

	        });
		    },
				error: function (response) {
					// Does this fail?
					console.log(response);
				}

		});
	}

	getData();




};
$(document).ready(main);
