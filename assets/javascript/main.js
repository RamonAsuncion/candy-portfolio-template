//smooth scrolling
$(document).ready(function () {
	// ^ waits until the document is "ready" to do this function
	$('.contain-project a').on('click', function (e) {
		if (this.has !== '') {
			e.preventDefault();
			const hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800 //scroll speed
			);
		}
	});
});

//understand what each line does
