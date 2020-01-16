import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import GeoHeatmap from './GeoHeatmap.vue';

const stories = storiesOf('atoms/GeoHeatMap', module);

stories.add('Default', () => ({
    template: '<geo-heatmap></geo-heatmap>',
    components: {
        GeoHeatmap
    }
}));


