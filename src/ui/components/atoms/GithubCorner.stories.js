import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import GithubCorner from './GithubCorner.vue';

const stories = storiesOf('atoms/GithubCorner', module);

stories.add('Default', () => ({
    components: { GithubCorner },
    template: '<github-corner></github-corner>'
}));

