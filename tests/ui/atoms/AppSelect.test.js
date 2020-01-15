import { shallowMount, mount } from '@vue/test-utils';

import AppSelect from '@/components/atoms/AppSelect.vue';

describe('AppSelect Component', () => {

    it('should have wrapper with class relative', () => {
        const wrapper = shallowMount(AppSelect);

        expect(wrapper.classes()).toContain('relative');
    });

    it('select should be styled', () => {
        const wrapper = shallowMount(AppSelect);

        const select = wrapper.find('select');

        expect(select.classes()).toContain('block');
        expect(select.classes()).toContain('appearance-none');
        expect(select.classes()).toContain('w-full');
        expect(select.classes()).toContain('bg-gray-200');
        expect(select.classes()).toContain('border');
        expect(select.classes()).toContain('border-gray-200');
        expect(select.classes()).toContain('text-gray-700');
        expect(select.classes()).toContain('py-3');
        expect(select.classes()).toContain('px-4');
        expect(select.classes()).toContain('pr-8');
        expect(select.classes()).toContain('rounded');
        expect(select.classes()).toContain('leading-tight');
        expect(select.classes()).toContain('focus:outline-none');
        expect(select.classes()).toContain('focus:bg-white');
        expect(select.classes()).toContain('focus:border-gray-500');
    });

    it('pointer container should be styled', () => {
        const wrapper = shallowMount(AppSelect);

        const pointerContainer = wrapper.find('[jest="pointer-container"]');

        expect(pointerContainer.classes()).toContain('pointer-events-none');
        expect(pointerContainer.classes()).toContain('absolute');
        expect(pointerContainer.classes()).toContain('inset-y-0');
        expect(pointerContainer.classes()).toContain('right-0');
        expect(pointerContainer.classes()).toContain('flex');
        expect(pointerContainer.classes()).toContain('items-center');
        expect(pointerContainer.classes()).toContain('px-2');
        expect(pointerContainer.classes()).toContain('text-gray-700');
    });

    it('svg should be styled', () => {
        const wrapper = shallowMount(AppSelect);

        const svg = wrapper.find('svg');

        expect(svg.classes()).toContain('fill-current');
        expect(svg.classes()).toContain('h-4');
        expect(svg.classes()).toContain('w-4');
    });

    it('options props must be rendered as options under select', () => {
        const wrapper = shallowMount(AppSelect, {
            propsData: {
                options: [{
                    text: 'Option 1',
                    value: 'OPTION_1'
                }, {
                    text: 'Option 2',
                    value: 'OPTION_2'
                }]
            }
        });

        const select = wrapper.find('select');

        // Number of option element
        expect(select.findAll('option').length).toBe(2);

        //Text and value of each option must match
        const option1 = select.findAll('option').at(0);
        expect(option1.text().trim()).toEqual('Option 1');
        expect(option1.attributes('value')).toEqual('OPTION_1');

        const option2 = select.findAll('option').at(1);
        expect(option2.text().trim()).toEqual('Option 2');
        expect(option2.attributes('value')).toEqual('OPTION_2');
    });

    it('clicking on option should call onChanged props function with value', () => {
        const onChangedCallback = jest.fn();

        const wrapper = mount(AppSelect, {
            propsData: {
                options: [{
                    text: 'Option 1',
                    value: 'OPTION_1'
                }, {
                    text: 'Option 2',
                    value: 'OPTION_2'
                }],
                onChanged: onChangedCallback
            }
        });

        // On click should return the option value
        const option1 = wrapper.find('select').findAll('option').at(0);
        option1.setSelected()
        expect(onChangedCallback.mock.calls[0][0]).toBe('OPTION_1');

        const option2 = wrapper.find('select').findAll('option').at(1);
        option2.setSelected()
        expect(onChangedCallback.mock.calls[1][0]).toBe('OPTION_2');

    });

    it('Setting selectedIndex props should call onChanged function', () => {
        const onChangedCallback = jest.fn();

        const wrapper = mount(AppSelect, {
            propsData: {
                options: [{
                    text: 'Option 1',
                    value: 'OPTION_1'
                }, {
                    text: 'Option 2',
                    value: 'OPTION_2'
                }],
                onChanged: onChangedCallback
            }
        });

        // On setting selectedIndex onChangedCallback must be called
        wrapper.setProps({ selectedIndex: 1 });
        wrapper.vm.$nextTick(() => {
            expect(onChangedCallback.mock.calls[0][0]).toBe('OPTION_2');
        });

    });

});
