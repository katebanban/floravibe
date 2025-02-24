import Swiper from 'swiper/bundle';

export function initSliders() {
	const catalogSlider = new Swiper('.catalog-slider', {
		slidesPerView: 'auto',
		grabCursor: true,
		//autoHeight: true,

		scrollbar: {
			el: ".catalog__slider-scroll",
			draggable: true
		}
	});
}