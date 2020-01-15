<template>
    <project-template>
        <template v-slot:controls>
            <div
                jest="controls-container"
                class="flex flex-col mt-20 p-4">
                <h1
                    jest="heading-by-project"
                    class="text-bold text-2xl mb-4">By Project</h1>
                <app-select :options="options"></app-select>
            </div>
        </template>
        <template v-slot:map>
            <h1>Map</h1>
        </template>
    </project-template>
</template>

<script>
import { getProjectData } from '@/api/ProjectData';

import ProjectTemplate from '@/components/templates/ProjectTemplate.vue';
import AppSelect from '@/components/atoms/AppSelect.vue';

getProjectData().then((data) => {
    console.log(data);
});

export default {
    name: 'project-page',

    components: {
        ProjectTemplate,
        AppSelect
    },

    data() {
        return {
            options: []
        }
    }
};
</script>
