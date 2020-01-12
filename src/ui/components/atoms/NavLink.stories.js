import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import NavLink from './NavLink.vue';

const stories = storiesOf('atoms/NavLink', module);

stories.add('Default', () => ({
    components: { NavLink },
    template: '<nav-link to="/">Some Text</nav-link>'
}));


