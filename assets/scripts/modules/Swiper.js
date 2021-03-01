import { module } from 'modujs';
import modularLoad from 'modularload';

export default class extends module {
	constructor(m) {
		super(m);

		this.events = {
			// click: {
			// 	'nav-toggle': 'handleSiteNav',
			// 	'nav-link': 'closeSiteNav',
			// }
		}
	}

  init() {
    console.log("module loaded", this);
    // this.el should be '.swiper-container'
    var swiper = new Swiper(this.el, {
      slidesPerView: "auto",
      centeredSlides: true,
    });
  }
}
