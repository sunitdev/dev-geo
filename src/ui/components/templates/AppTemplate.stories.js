import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import AppTemplate from './AppTemplate.vue';

const stories = storiesOf('templates/AppTemplate', module);

stories.add('Default', () => ({
    components: { AppTemplate },
    template: '<app-template></app-template>'
}));

