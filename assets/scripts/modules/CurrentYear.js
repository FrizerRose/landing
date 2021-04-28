import { module } from 'modujs';
import modularLoad from 'modularload';

export default class extends module {
	constructor(m) {
		super(m);
	}

  init() {
    // console.log("currentYear", this.el);
    if ( this.el.querySelector(".js-year-placeholder") !== null ) {
      this.el.querySelector(".js-year-placeholder").outerHTML = new Date().getFullYear();
    }
  }
}
