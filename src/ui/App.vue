<template>
    <div>
        <div
            v-if="isMobile()"
            class="flex flex-col items-center justify-center h-screen"
        >
            <h1 class="font-bold text-2xl mb-2">
                Sorry, Mobile display not supported.
            </h1>
            <p>Please open this site on a desktop.</p>
        </div>
        <app-template v-if="!isMobile()">
            <template v-slot:header>
                <app-nav :routers="routers"></app-nav>
            </template>
            <template v-slot:content>
                <router-view></router-view>
            </template>
        </app-template>
    </div>
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

    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
           } else { return false }
        }
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
