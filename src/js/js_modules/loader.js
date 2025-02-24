export const loader = () => {
	const loaderBox = document.querySelector('.loader-box');

	window.addEventListener('load', () => {
		loaderBox.classList.add('hidden');

		setTimeout(() => {
			loaderBox.remove();
		}, 1000);
	})
}