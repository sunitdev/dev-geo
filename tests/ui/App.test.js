import { shallowMount, createLocalVue } from '@vue/test-utils';

import VueRouter from 'vue-router'

import App from '@/App.vue';
import AppTemplate from '@/components/templates/AppTemplate.vue';

// local vue router
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('App.vue Component',() => {

    it('should be instance of AppTemplate', () => {
        const wrapper = shallowMount(App, {
            localVue,
            router
        });

        expect(wrapper.find(AppTemplate).exists()).toBe(true);
    });
});
