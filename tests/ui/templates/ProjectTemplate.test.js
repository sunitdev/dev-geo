import { shallowMount } from '@vue/test-utils';

import ProjectTemplate from '@/components/templates/ProjectTemplate.vue';

describe('ProjectTemplate Component', () => {

    it('should have container, margin and flex', () => {

        const wrapper = shallowMount(ProjectTemplate);

        expect(wrapper.classes()).toContain('container');
        expect(wrapper.classes()).toContain('h-full');
        expect(wrapper.classes()).toContain('mx-auto');
        expect(wrapper.classes()).toContain('py-4');
        expect(wrapper.classes()).toContain('flex');
    });

    it('control and map should have flex-grow', () => {
        const wrapper = shallowMount(ProjectTemplate);

        expect(wrapper.find('[jest="controls"]').classes()).toContain('flex-grow');
        expect(wrapper.find('[jest="map"]').classes()).toContain('flex-grow');
    });

    it('should have controls and map as slots', () => {
        const wrapper = shallowMount(ProjectTemplate, {
            slots: {
                controls: `<div id="test-control">Control Content</div>`,
                map: `<div id="test-map">Map Content</div>`
            }
        });

        expect(wrapper.find('#test-control').text().trim()).toEqual('Control Content');
        expect(wrapper.find('#test-map').text().trim()).toEqual('Map Content');
    });
});
