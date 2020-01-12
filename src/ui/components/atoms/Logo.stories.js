import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Logo from './Logo.vue';

const stories = storiesOf('atoms/Logo', module);

stories.add('Default', () => ({
    components: { Logo },
    template: '<logo></logo>'
}));

