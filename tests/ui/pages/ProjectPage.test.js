import { shallowMount, mount } from '@vue/test-utils';

import ProjectPage from '@/components/pages/ProjectPage.vue';

describe('Project Page Component', () => {

    it('container must have style', () => {
        const wrapper = shallowMount(ProjectPage);

        const container = wrapper.find('[jest="container"]');

        expect(container.classes()).toContain('h-full');
    });

});
