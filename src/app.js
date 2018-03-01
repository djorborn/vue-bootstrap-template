
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    render: (h) => h(App),
});

import mdcAutoInit from '@material/auto-init';
import {MDCRipple} from '@material/ripple';
new MDCRipple(document.querySelector('.mdc-list-item'));
new MDCRipple(document.querySelector('.mdc-button'))
mdcAutoInit.register('MDCRipple', MDCRipple);