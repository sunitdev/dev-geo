<template>
    <app-template>
        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </app-template>
</template>

<script>
import AppTemplate from '@/components/templates/AppTemplate.vue';

export default {
    name: 'App',

    components: {
        AppTemplate
    }
}
</script>
