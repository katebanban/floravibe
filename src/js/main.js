import "gulp-avif-css/plugin.js"; //! НЕ УДАЛЯТЬ (помогает узнать, поддерживает ли браузер avif и webp)

import { initMenu } from "./js_modules/menu.js";
import { autoCalc } from "./js_modules/autoCalc.js";
import { elementMover } from "./js_modules/elementMover.js";
import { smoothScroll } from "./js_modules/smoothScroll.js";
import { initSliders } from "./js_modules/sliders.js";
//import { tabs } from "./js_modules/tabs.js";
//import { loader } from "./js_modules/loader.js";

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
	Images: {
		content: (_ref, slide) => {
			if (slide.triggerEl.hasAttribute('data-sources')) {
				let rez = "<picture>";

				const alt = slide.alt || '';

				slide.sources.split(";").map((source, index) => {
					rez += `<source srcset="${source}"/>`;
				});

				rez += `<img src="${slide.src}" alt="${alt}"/>`;

				rez += "</picture>";

				return rez;
			}
		},
	},
});

initMenu();
autoCalc();
elementMover();
smoothScroll();
initSliders();
//tabs();
//loader();