import { shallowMount, mount } from '@vue/test-utils';

import ProjectPage from '@/components/pages/ProjectPage.vue';

describe('Project Page Component', () => {

    it('container must have style', () => {
        const wrapper = shallowMount(ProjectPage);

        const container = wrapper.find('[jest="container"]');

        expect(container.classes()).toContain('h-full');
    });

    it('controls-container should have style associated with it', () => {
        const wrapper = mount(ProjectPage);

        const controlsContainer = wrapper.find('[jest="controls-container"]');

        expect(controlsContainer.classes()).toContain('flex');
        expect(controlsContainer.classes()).toContain('flex-col');
        expect(controlsContainer.classes()).toContain('mt-20');
        expect(controlsContainer.classes()).toContain('p-4');
    });

    it('By Project heading should have style associated with it', () => {
        const wrapper = mount(ProjectPage);

        const projectHeading = wrapper.find('[jest="heading-by-project"]');

        expect(projectHeading.classes()).toContain('text-bold');
        expect(projectHeading.classes()).toContain('text-2xl');
        expect(projectHeading.classes()).toContain('mb-4');
    });
});
