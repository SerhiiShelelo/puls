
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

(function($) {
	$(function() {
  
	  $('ul.catalog__tabs').each(function(i) {
		 var storage = localStorage.getItem('tab' + i);
		 if (storage) {
			$(this).find('li').removeClass('catalog__tab_active').eq(storage).addClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq(storage).addClass('catalog__content_active');
		 }
	  });
  
	  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		 $(this)
		 .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		 .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		 var ulIndex = $('ul.catalog__tabs').index($(this).parents('ul.catalog__tabs'));
		 localStorage.removeItem('tab' + ulIndex);
		 localStorage.setItem('tab' + ulIndex, $(this).index());
	  });
  
	});
 })(jQuery);