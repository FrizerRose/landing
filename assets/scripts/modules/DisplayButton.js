import { module } from 'modujs';
import modularLoad from 'modularload';

export default class extends module {
	constructor(m) {
		super(m);
	}

  init() {}

  toggle() {
    console.log("toggle", this.el);
    this.el.classList.contains("-show") ? this.el.classList.remove("-show") : this.el.classList.add("-show")
  }
}
