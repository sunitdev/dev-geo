import Vue from 'vue';
import App from '@/App.vue';

import '@/styles/tailwind.css';

new Vue({
    render: (createEl) => createEl(App)
}).$mount('#app');
