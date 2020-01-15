import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import AppSelect from './AppSelect.vue';

const stories = storiesOf('atoms/AppSelect', module);

stories.add('Default', () => {

    const actionData = {
        onChangedAction: action('onChanged')
    }

    const options = [{
        text: 'Option 1',
        value: 'OPTION_1'
    },{
        text: 'Option 2',
        value: 'OPTION_2'
    },{
        text: 'Option 3',
        value: 'OPTION_3'
    }];

    return {
        components: { AppSelect },
        methods: actionData,
        data() {
            return { options }
        },
        template: `<app-select
                    :options="options"
                    :onChanged="onChangedAction">
                </app-select>`
    }
});
