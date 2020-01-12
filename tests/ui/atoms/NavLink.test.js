import { shallowMount, createLocalVue } from '@vue/test-utils';

import VueRouter from 'vue-router'

import NavLink from '@/components/atoms/NavLink.vue';

// Local vue router
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('NavLink Component', () => {
    it('should have span class with text size and underline', () =>{
        const wrapper = shallowMount(NavLink, {
            propsData: {
                to: '/'
            },
            localVue,
            router
        });

        expect(wrapper.findAll('span').length).toBe(1);

        expect(wrapper.find('span').classes()).toContain('text-2xl');
        expect(wrapper.find('span').classes()).toContain('underline');
    });
});
