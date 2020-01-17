<template>
    <div class="h-full">
        <loading-overlay v-if="!isLoaded"></loading-overlay>
        <home-template>
            <template v-slot:logo>
                <logo></logo>
            </template>
            <template v-slot:description>
                <div class="text-center">
                    <h1
                        jest="description"
                        class="text-2xl">
                        GeoVisualization of Contributors of Open Source Projects.
                    </h1>
                    <p  v-if="lastUpdated"
                        class="text-gray-600 mt-1">Data last updated - {{ lastUpdated }}</p>
                </div>
            </template>
            <template v-slot:footer>
                <p
                    jest="footer"
                    class="text-sm text-center text-gray-600">
                    <strong>Note:</strong> This data is not 100% accurate as some developers don't share their location information.
                </p>
            </template>
        </home-template>
    </div>
</template>

<script>
import { getProjectData } from '@/api/ProjectData';

import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import Logo from "@/components/atoms/Logo.vue";
import LoadingOverlay from'@/components/atoms/LoadingOverlay.vue';

export default {
    name: "home-page",

    components: {
        HomeTemplate,
        Logo,
        LoadingOverlay
    },

    data() {
        return {
            isLoaded: false,
            lastUpdated: null
        }
    },

    mounted: function() {
        getProjectData().then(data => {
            this.lastUpdated = data.lastModified.toLocaleString('en-US');
            this.isLoaded = true;
        });
    }

};
</script>
