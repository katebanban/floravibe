import Swiper from 'swiper/bundle';

export function initSliders() {
	const catalogSlider = new Swiper('.catalog-slider', {
		slidesPerView: 'auto',
		grabCursor: true,

		scrollbar: {
			el: ".catalog__slider-scroll",
			draggable: true
		}
	});

	const benefitsSwiper = new Swiper('.benefits-swiper', {
		grabCursor: true,
		spaceBetween: 48,
		loop: true,

		pagination: {
			el: ".benefits__pagination",
			clickable: true
		}
	});
}