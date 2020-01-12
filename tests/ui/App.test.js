import { shallowMount, createLocalVue } from '@vue/test-utils';

import VueRouter from 'vue-router'

import { ROUTE_HOME, ROUTE_PROJECTS } from '@/routes';

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

    it('should have routers data set to default paths', () => {
        const wrapper = shallowMount(App,  {
            localVue,
            router
        });

        expect(wrapper.vm.$data.routers).toEqual([{
            text: 'Home',
            path: ROUTE_HOME
        },{
            text: 'By Project',
            path: ROUTE_PROJECTS
        }]);
    });
});
