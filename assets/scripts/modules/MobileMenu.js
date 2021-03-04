import { module } from 'modujs';
import modularLoad from 'modularload';
import { html } from '../utils/environment';

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
    // console.log("module loaded", this);
  }

	handleSiteNav() {
		// console.log("handleSiteNav", this);
    html.classList.toggle("has-mobile-menu-open")
  }

	closeSiteNav() {
    html.classList.remove("has-mobile-menu-open")
  }
}
