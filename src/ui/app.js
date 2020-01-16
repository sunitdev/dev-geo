import Vue from 'vue';

import VueRouter from 'vue-router';

import App from '@/App.vue';
import  { routes }  from '@/routes';

// Tailwind css
import '@/styles/tailwind.css';

// Fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Router
Vue.use(VueRouter);

new Vue({

    // Routes
    router: new VueRouter({ routes }),

    // Render vue
    render: (createEl) => createEl(App)

}).$mount('#app');
