$('.light-mode-btn').on('click', function () {
	if ($('html').hasClass('dark-mode')) {
		$('html').removeClass('dark-mode');
		$('html').addClass('light-mode');
	}
});

$('.dark-mode-btn').on('click', function () {
	if ($('html').hasClass('light-mode')) {
		$('html').removeClass('light-mode');
		$('html').addClass('dark-mode');
	}
});