import Vue from 'vue';
import app from './app';

import router from './router/index'
import './assets/styles/common.css';
import './assets/styles/fonts/iconfont.css'

new Vue({
    ...app,
    router
}).$mount('#app');