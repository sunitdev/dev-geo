import Vue from 'vue';

import VueRouter from 'vue-router';

import App from '@/App.vue';

// Tailwind css
import '@/styles/tailwind.css';

// Router
Vue.use(VueRouter);

new Vue({
    render: (createEl) => createEl(App)
}).$mount('#app');
