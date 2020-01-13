import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import AppNav from './AppNav.vue';

const stories = storiesOf('molecules/AppNav', module);

stories.add('Default', () => ({
    components: { AppNav },
    template: `<app-nav :routers="routers"></app-nav>`,
    data() {
        return {
            routers: [{
                text: 'Link 1',
            },
            {
                text: 'Link 2',
            },
            {
                text: 'Link 3',
            }]
        }
    }
}));


