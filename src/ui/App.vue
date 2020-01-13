<template>
    <app-template>
        <template v-slot:header>
            <app-nav :routers="routers"></app-nav>
        </template>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </app-template>
</template>

<script>
import { ROUTE_HOME, ROUTE_PROJECTS } from '@/routes';

import AppTemplate from '@/components/templates/AppTemplate.vue';
import AppNav from '@/components/molecules/AppNav.vue';

export default {
    name: 'App',

    components: {
        AppTemplate,
        AppNav
    },

    data: () => ({
        routers: [{
            text: 'Home',
            path: ROUTE_HOME
        },{
            text: 'By Project',
            path: ROUTE_PROJECTS
        }]
    })

}
</script>
