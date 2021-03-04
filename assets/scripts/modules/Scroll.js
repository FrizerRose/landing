import LocomotiveScroll from 'locomotive-scroll';
import { module } from 'modujs';
import { html } from '../utils/environment'

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.el,
            smooth: true,
            // smoothMobile: true,
            // touchMultiplier: 1,
        });

        this.scroll.on('call', (func,way,obj,id) => {
            // Using modularJS
            this.call(func[0],{way,obj},func[1],func[2]);
        });

        this.scroll.on('scroll', (args) => {
            // console.log(args.scroll);
            // console.log(args.scroll.y);
            // this.call('toggle', false, 'DisplayButton', '')

            // console.log(this.modules.StickyCtaToggler.fixedSection.el);
            args.scroll.y > 50 ? html.classList.add("has-scrolled") : html.classList.remove("has-scrolled"),
            "down" == args.direction ? html.classList.add("is-scrolling-down") : html.classList.remove("is-scrolling-down"),
            args.scroll.y > args.limit - 50 ? html.classList.add("is-scrolling-end") : html.classList.remove("is-scrolling-end")
        })
    }

    toggleLazy(args) {
        let src = this.getData('lazy', args.obj.el)
        if(src.length) {
            if(args.obj.el.tagName == "IMG") {
                args.obj.el.src = src
            } else {
                args.obj.el.style.backgroundImage = `url(${src})`
            }
            this.setData('lazy', '', args.obj.el)
        }
    }

    destroy() {
        this.scroll.destroy();
    }
}
