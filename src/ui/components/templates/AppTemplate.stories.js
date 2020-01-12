import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import AppTemplate from './AppTemplate.vue';

const stories = storiesOf('templates/AppTemplate', module);

stories.add('Default', () => ({
    components: { AppTemplate },
    template: `<app-template>
        <template v-slot:header>
            <h1>Header Slot</h1>
        </template>
        <template v-slot:content>
            <h1>Content Slot</h1>
        </template>
        <template v-slot:footer>
            <h1>Footer Slot</h1>
        </template>
    </app-template>`
}));

