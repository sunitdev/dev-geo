import { shallowMount } from '@vue/test-utils';

import LoadingOverlay from '@/components/atoms/LoadingOverlay.vue';

describe('LoadingOveraly Component', () => {
    it('Component must have style', () => {
        const wrapper = shallowMount(LoadingOverlay);

        expect(wrapper.classes()).toContain('w-full');
        expect(wrapper.classes()).toContain('h-full');
        expect(wrapper.classes()).toContain('fixed');
        expect(wrapper.classes()).toContain('block');
        expect(wrapper.classes()).toContain('top-0');
        expect(wrapper.classes()).toContain('left-0');
        expect(wrapper.classes()).toContain('bg-white');
        expect(wrapper.classes()).toContain('opacity-75');
        expect(wrapper.classes()).toContain('z-50');
    });

    it('Icon container must have style', () => {
        const wrapper = shallowMount(LoadingOverlay);

        const iconContainer = wrapper.find('[jest="icon-container"]');

        expect(iconContainer.classes()).toContain('text-green-500');
        expect(iconContainer.classes()).toContain('opacity-75');
        expect(iconContainer.classes()).toContain('top-1/2');
        expect(iconContainer.classes()).toContain('my-0');
        expect(iconContainer.classes()).toContain('mx-auto');
        expect(iconContainer.classes()).toContain('block');
        expect(iconContainer.classes()).toContain('relative');
        expect(iconContainer.classes()).toContain('w-0');
        expect(iconContainer.classes()).toContain('h-0');
    });

    it('Icon should have style', () => {
        const wrapper = shallowMount(LoadingOverlay);

        const icon = wrapper.find('[jest="icon"]');

        expect(icon.classes()).toContain('fas');
        expect(icon.classes()).toContain('fa-circle-notch');
        expect(icon.classes()).toContain('fa-spin');
        expect(icon.classes()).toContain('fa-5x');
    });
});
