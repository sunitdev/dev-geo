<template>
    <div
        jest="container"
        class="h-full">
        <loading-overlay v-if="!isloaded"></loading-overlay>
        <project-template>
            <template v-slot:controls>
                <div jest="controls-container" class="flex flex-col px-4">
                    <h1
                        jest="heading-by-project"
                        class="text-bold text-2xl mb-4 mt-0" >
                        By Project
                    </h1>
                    <app-select
                        :options="options"
                        :onChanged="onProjectChanged"
                        :selectedIndex="selectedIndex"></app-select>
                    <div v-if="selectedOption">
                        {{ selectedOption }}
                    </div>
                </div>
            </template>
            <template v-slot:map>
                <geo-heatmap
                    :countryData="countryData"></geo-heatmap>
            </template>
        </project-template>
    </div>
</template>

<script>
import { getProjectData } from '@/api/ProjectData';

import ProjectTemplate from '@/components/templates/ProjectTemplate.vue';
import AppSelect from '@/components/atoms/AppSelect.vue';
import LoadingOverlay from'@/components/atoms/LoadingOverlay.vue';
import GeoHeatmap from '@/components/atoms/GeoHeatmap.vue';

export default {
    name: 'project-page',

    components: {
        ProjectTemplate,
        AppSelect,
        LoadingOverlay,
        GeoHeatmap
    },

    data() {
        return {
            options: [],
            selectedIndex: null,
            selectedOption: null,
            countryData: null,
            isloaded: false,
            projects: null
        };
    },

    mounted: function(){
        // Get data
        getProjectData().then(data => {
            this.projects = data.projects;

            // Populate the options variable
            this.options = Object.keys(this.projects).map((key) => ({ text: key, value: key }) );

            // Select the first index
            this.selectedIndex = 0;
            this.selectedOption = this.projects[this.options[0].value];

            // Disable loading
            this.isloaded = true;
        });
    },

    methods: {
        onProjectChanged(value){
            this.selectedOption = this.projects[value];
            this.countryData = this.projects[value].data;
        }
    }
};
</script>
