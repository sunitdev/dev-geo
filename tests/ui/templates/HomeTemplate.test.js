import { shallowMount } from '@vue/test-utils';

import HomeTemplate from '@/components/templates/HomeTemplate.vue';

describe('HomeTemplate Component', () => {
    it('should have container, margin and flex classes', () => {
        const wrapper = shallowMount(HomeTemplate);

        expect(wrapper.classes()).toContain('container');
        expect(wrapper.classes()).toContain('h-full');
        expect(wrapper.classes()).toContain('mx-auto');
        expect(wrapper.classes()).toContain('py-4');
        expect(wrapper.classes()).toContain('flex');
        expect(wrapper.classes()).toContain('flex-col');
        expect(wrapper.classes()).toContain('justify-center');
    });


    it('should have three slots', () => {
        const wrapper = shallowMount(HomeTemplate, {
            slots: {
                logo: `<div id="logo-slot">Logo Slot Content</div>`,
                description: `<div id="desc-slot">Description Slot Content</div>`,
                footer: `<div id="footer-slot">Footer Slot Content</div>`
            }
        });

        expect(wrapper.findAll('#logo-slot').length).toBe(1);
        expect(wrapper.find('#logo-slot').text().trim()).toEqual('Logo Slot Content');

        expect(wrapper.findAll('#desc-slot').length).toBe(1);
        expect(wrapper.find('#desc-slot').text().trim()).toEqual('Description Slot Content');

        expect(wrapper.findAll('#footer-slot').length).toBe(1);
        expect(wrapper.find('#footer-slot').text().trim()).toEqual('Footer Slot Content');
    });

    it('Logo Desc container must have style applied', () => {
        const wrapper = shallowMount(HomeTemplate);

        const logoContainer = wrapper.find('[jest="logo-desc-container"]');

        expect(logoContainer.classes()).toContain('flex-grow');
        expect(logoContainer.classes()).toContain('flex');
        expect(logoContainer.classes()).toContain('flex-col');
        expect(logoContainer.classes()).toContain('items-center');
        expect(logoContainer.classes()).toContain('justify-center');
    });

});

