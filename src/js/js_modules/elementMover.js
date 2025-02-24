//* ПЕРЕМЕЩАЕМ БЛОК ORDER (надпись и кнопка) В МЕНЮ (на экране 768px)

export function elementMover() {
	const headerOrder = document.querySelector('.header__order');
	const menu = document.querySelector('.menu');
	const headerBody = document.querySelector('.header__body');
	const screen = window.matchMedia('(max-width: 768px)');

	function moveElement(screen) {
		if (screen.matches) {
			menu.append(headerOrder); // prepend перемещает в начало
		} else {
			headerBody.append(headerOrder); // append перемещает в конец
		}
	}

	moveElement(screen);
	screen.addEventListener('change', moveElement);
}