export function fixSpoilerHeight() {
	const allSpoilers = document.querySelectorAll('[data-spoiler]');

	allSpoilers.forEach((spoiler) => {
		if (spoiler.classList.contains('active')) {
			const answer = spoiler.querySelector('[data-spoiler-answer]');
			let answerHeight = answer.scrollHeight;

			answer.style.cssText = `max-height: ${answerHeight}px; visibility: visible; will-change: max-height;`;
		}
	})
}

export function spoiler() {
	const allSpoilers = document.querySelectorAll('[data-spoiler]');

	allSpoilers[0].classList.add('active');

	allSpoilers.forEach((spoiler) => {
		const question = spoiler.querySelector('[data-spoiler-question]');
		const answer = spoiler.querySelector('[data-spoiler-answer]');

		let answerHeight = answer.scrollHeight;

		if (spoiler.classList.contains('active')) {
			answer.style.cssText = `max-height: ${answerHeight}px; visibility: visible; will-change: max-height;`;
		} else {
			answer.style.cssText = `max-height: 0px; visibility: hidden; will-change: max-height;`;
		}

		question.addEventListener('click', () => {
			answerHeight = answer.scrollHeight;
			
			spoiler.classList.toggle('active');
			
			if (spoiler.classList.contains('active')) {
				answer.style.cssText = `max-height: ${answerHeight}px; visibility: visible; will-change: max-height;`;
			} else {
				answer.style.cssText = `max-height: 0px; visibility: hidden; will-change: max-height;`;
			}
		})
	})

	window.addEventListener('resize', fixSpoilerHeight);
}