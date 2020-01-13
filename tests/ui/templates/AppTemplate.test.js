import { shallowMount, mount } from '@vue/test-utils';
import AppTemplate from '@/components/templates/AppTemplate.vue';

describe('AppTemplate Component', () => {
    it('should have full height and flex classes', () => {
        const wrapper = shallowMount(AppTemplate);

        expect(wrapper.classes()).toContain('h-screen');
        expect(wrapper.classes()).toContain('flex');
        expect(wrapper.classes()).toContain('flex-col');
    });

    it('should have header, section and footer as child components', () => {
        const wrapper = mount(AppTemplate);

        expect(wrapper.find('header').is('header')).toBe(true);
        expect(wrapper.find('section').is('section')).toBe(true);
    });

    it('section should have flex-grow class', () => {
        const wrapper = mount(AppTemplate);

        expect(wrapper.find('section').classes()).toContain('flex-grow');
    });

    it('should have header, content and footer named slots', () => {
        const wrapper = shallowMount(AppTemplate, {
            slots: {
                header: `<div>Header Slot Content</div>`,
                content: `<div>Content Slot Content</div>`,
            }
        });

        expect(wrapper.find('header').text().trim()).toBe('Header Slot Content');
        expect(wrapper.find('section').text().trim()).toBe('Content Slot Content');
    });
});
