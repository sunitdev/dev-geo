import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue Component',() => {
    it('should mount and render Hello World', () => {
        const wrapper = mount(App);

        expect(wrapper.text()).toBe('Hello World');
    })
});
