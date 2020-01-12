import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HomePage from './HomePage.vue';

const stories = storiesOf('pages/Home', module);

stories.add('Default', () => ({
    components: { HomePage },
    template: '<home-page></home-page>'
}));

