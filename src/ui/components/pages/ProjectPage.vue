<template>
    <div
        jest="container"
        class="h-full">
        <loading-overlay v-if="!isloaded"></loading-overlay>
        <project-template>
            <template v-slot:controls>
                <div jest="controls-container" class="flex flex-col mt-20 p-4">
                    <h1
                        jest="heading-by-project"
                        class="text-bold text-2xl mb-4" >
                        By Project
                    </h1>
                    <app-select :options="options"></app-select>
                </div>
            </template>
            <template v-slot:map>
                <h1>Map</h1>
            </template>
        </project-template>
    </div>
</template>

<script>
import { getProjectData } from '@/api/ProjectData';

import ProjectTemplate from '@/components/templates/ProjectTemplate.vue';
import AppSelect from '@/components/atoms/AppSelect.vue';
import LoadingOverlay from'@/components/atoms/LoadingOverlay.vue';

export default {
    name: 'project-page',

    components: {
        ProjectTemplate,
        AppSelect,
        LoadingOverlay
    },

    data() {
        return {
            options: [],
            isloaded: false
        };
    },

    mounted: function(){
        // Get data
        getProjectData().then(data => {
            let projects = data.projects;

            // Populate the options variable
            this.options = Object.keys(projects).map((key) => ({ text: key, value: key }) );

            // Disable loading
            this.isloaded = true;
        });
    }
};
</script>
