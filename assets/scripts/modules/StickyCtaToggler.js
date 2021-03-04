import { module } from 'modujs';
import modularLoad from 'modularload';
import { html } from '../utils/environment';

export default class extends module {
	constructor(m) {
		super(m);

		// this.events = {
		// 	click: {
		// 		'init': 'handleSiteNav',
		// 		'nav-link': 'closeSiteNav',
		// 	}
		// }
	}

  init() {
    // console.log("module loaded", this);

    // const fixedCtaHideTrigger = document.querySelector(".js-hide-fixed-cta")

    // console.log("fixedCtaHideTrigger", fixedCtaHideTrigger.getClientRects()[0].y);
    // console.log("window", fixedCtaHideTrigger - window.innerHeight);

    // this.modules.Scroll.main.scroll.on('scroll', function (args) {
      // console.log(args.delta.y);
      // console.log( fixedCtaHideTrigger.getClientRects()[0].y );
      // if ( fixedCtaHideTrigger - window.innerHeight ) {
      //   console.log("aaaaa");
      // }
    // })
  }

	hide() {
    console.log(this.modules.Scroll.main.scroll);
    // const fixedCtaHideTrigger = document.querySelector(".js-hide-fixed-cta")
    // console.log(fixedCtaHideTrigger.getClientRects()[0].y);
    // if ( fixedCtaHideTrigger.getClientRects()[0].y - window.innerHeight ) {
    //   console.log("aaaaa");
    // }
        // this.el.classList.contains("aaaaaaaaaaaaaaaaaaaa") ? this.el.classList.remove("aaaaaaaaaaaaaaaaaaaa") : this.el.classList.add("aaaaaaaaaaaaaaaaaaaa")
    // "enter" === t.way ? this.el.classList.add("is-hidden") : this.el.classList.remove("is-hidden")
  }
}
