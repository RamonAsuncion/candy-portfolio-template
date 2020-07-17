//smooth scrolling

$(document).ready(function () {
	// ^ waits until the document is "ready" to do this function
	$('.contain-project a').on('click', function (e) {
		//$(selector).action()
		if (this.hash !== '') {
			//if its not equal to an empty string
			e.preventDefault();
			//prevents the default behavior
			const hash = this.hash;
			//hash value into a variable
			$('html, body').animate(
				//targets the body and calls the animate method
				{
					scrollTop: $(hash).offset().top,
					//takes an object and adds the property scroll Top (scrolls from the top)
					//takes the has value and call the offset method and top
				},
				800 //speed of the scroll
			);
		}
	});
});

$(document).ready(function () {
	$('footer a').on('click', function (e) {
		if (this.hash !== '') {
			e.preventDefault();
			const hash2 = this.hash;
			$('html, body').animate({}, 800);
		}
	});
});
