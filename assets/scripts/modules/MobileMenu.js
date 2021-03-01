import { module } from 'modujs';
import modularLoad from 'modularload';

export default class extends module {
	constructor(m) {
		super(m);

		this.events = {
			click: {
				'nav-toggle': 'handleSiteNav',
				'nav-link': 'closeSiteNav',
			}
		}
	}

  init() {
    console.log("module loaded", this);
  }

	handleSiteNav() {
		// console.log("handleSiteNav", this);
    document.documentElement.classList.toggle("has-mobile-menu-open")
  }

	closeSiteNav() {
    document.documentElement.classList.remove("has-mobile-menu-open")
  }
}
