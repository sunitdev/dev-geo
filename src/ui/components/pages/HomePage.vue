<template>
    <home-template>
        <template v-slot:logo>
            <logo></logo>
        </template>
        <template v-slot:description>
            <h1
                jest="description"
                class="text-2xl text-center">
                GeoVisualization of developers working on Open Source Projects.
            </h1>
        </template>
        <template v-slot:footer>
            <p
                jest="footer"
                class="text-sm text-center text-gray-600">
                <strong>Note:</strong> This data is not 100% accurate as some developers don't share their location information.
            </p>
        </template>
    </home-template>
</template>

<script>
import Logo from "@/components/atoms/Logo.vue";

import HomeTemplate from "@/components/templates/HomeTemplate.vue";

export default {
    name: "home-page",

    components: {
        HomeTemplate,
        Logo
    }
};
</script>
