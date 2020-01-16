import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import LoadingOverlay from './LoadingOverlay.vue';

const stories = storiesOf('atoms/LoadingOverlay', module);

stories.add('Default', () => ({
    components: { LoadingOverlay },
    template: '<loading-overlay></loading-overlay>'
}));


