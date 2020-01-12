import { shallowMount } from '@vue/test-utils';

import AppNav from '@/components/molecules/AppNav.vue';
import NavLink from '@/components/atoms/NavLink.vue';

describe('AppNav components', () => {
    it('should be nav with flex and flex-row class', () => {
        const wrapper = shallowMount(AppNav);

        expect(wrapper.is('nav')).toBe(true);

        expect(wrapper.classes()).toContain('flex');
        expect(wrapper.classes()).toContain('flex-row');
        expect(wrapper.classes()).toContain('justify-end');
        expect(wrapper.classes()).toContain('p-12');
        expect(wrapper.classes()).toContain('mr-12');
    });

    it('should render nav-link for each props and class mx-4', () => {
        const wrapper = shallowMount(AppNav, {
            propsData: {
                routers: [
                    {
                        text: 'Link 1'
                    },
                    {
                        text: 'Link 2'
                    }
                ]
            }
        });

        expect(wrapper.findAll(NavLink).length).toBe(2);

        expect(wrapper.findAll(NavLink).at(1).classes()).toContain('mx-4');

    });
});
