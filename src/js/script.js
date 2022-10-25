const slider = tns({
	container: '.my-slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: true,
	responsive: {
      768: {
        nav: false,
      },
		320: {
			nav: true,
		 }
    }
});

document.querySelector('.arrow-right').addEventListener('click', function () {
	slider.goTo('next');
});
document.querySelector('.arrow-left').addEventListener('click', function () {
	slider.goTo('prev');
});