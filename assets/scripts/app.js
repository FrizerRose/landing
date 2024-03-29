import modular from 'modujs';
import globals from './globals';
import * as modules from './modules';
import { html } from './utils/environment';

const app = new modular({
    modules: modules
});

window.onload = (event) => {
    const $style = document.getElementById("stylesheet");

    if ($style.isLoaded) {
        init();
    } else {
        $style.addEventListener('load', (event) => {
            init();
        });
    }
};

function init() {
    app.init(app);
    globals();

    html.classList.add('is-loaded', 'is-ready');
    html.classList.remove('is-loading');

    // fix layout jump on mobile when address bar resizes screen by showing up and hiding
    html.style.setProperty('--vh', `${window.innerHeight/100}px`);

    setTimeout(function() {
      html.classList.add('is-hero-animate');
    }, 4000)
}
