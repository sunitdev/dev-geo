import { mount } from '@vue/test-utils';

import HomePage from '@/components/pages/HomePage.vue';

describe('HomePage Component', () => {

    it('describe should have text and style', () => {
        const wrapper = mount(HomePage);

        const description = wrapper.find('[jest="description"]');

        expect(description.text().trim()).toBe('GeoVisualization of Contributors of Open Source Projects.');

        expect(description.classes()).toContain('text-2xl');
    });

    it('footer should have text and style', () => {
        const wrapper = mount(HomePage);

        const footer = wrapper.find('[jest="footer"]');

        expect(footer.text().trim()).toBe("Note: This data is not 100% accurate as some developers don't share their location information.")
        expect(footer.classes()).toContain('text-sm');
        expect(footer.classes()).toContain('text-center');
        expect(footer.classes()).toContain('text-gray-600');
    });

});
