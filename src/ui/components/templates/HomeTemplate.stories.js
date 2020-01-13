import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HomeTemplate from './HomeTemplate.vue';

const stories = storiesOf('templates/HomeTemplate', module);

stories.add('Default', () => ({
    components: { HomeTemplate },
    template: `<home-template>
        <template v-slot:logo>
            <h1>Logo</h1>
        </template>
        <template v-slot:description>
            <h1>Description</h1>
        </template>
        <template v-slot:footer>
            <h1>Footer</h1>
        </template>
    </home-template>`
}));


