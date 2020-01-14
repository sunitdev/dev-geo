import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import ProjectTemplate from './ProjectTemplate.vue';

const stories = storiesOf('templates/ProjectTemplate', module);

stories.add('Default', () => ({
    components: { ProjectTemplate},
    template: `<project-template>
            <template v-slot:controls>
                <h1>Controls</h1>
            </template>
            <template v-slot:map>
                <h1>Map</h1>
            </template>
        </project-template>`
}));

