export function tabs() {
	const allInfoBlocks = document.querySelectorAll('.services-info');
	const allBtns = document.querySelectorAll('.services-tab__btn');
	const allTabs = document.querySelectorAll('.services-tab');

	allInfoBlocks[0].classList.add('active');
	allTabs[0].classList.add('active');

	allBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			allBtns.forEach((btn) => {
				btn.parentElement.classList.remove('active');
			})

			btn.parentElement.classList.add('active');

			allInfoBlocks.forEach((infoBlock) => {
				infoBlock.classList.remove('active');

				if (btn.getAttribute('data-tab') === infoBlock.getAttribute('data-tab')) {
					infoBlock.classList.add('active');
				}
			})
		})
	})
}