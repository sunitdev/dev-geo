import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import ProjectPage from './ProjectPage.vue';

const stories = storiesOf('pages/Projects', module);

stories.add('Default', () => ({
    components: { ProjectPage },
    template: '<project-page></project-page>'
}));

