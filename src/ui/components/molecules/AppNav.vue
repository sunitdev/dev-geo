<template>
    <nav class="flex flex-row justify-end p-12 mr-12">
        <nav-link v-for="route in routers" :to="route.path" class="mx-4">{{ route.text }}</nav-link>
    </nav>
</template>

<script>
import NavLink from '@/components/atoms/NavLink.vue';

export default {
    name: 'app-nav',

    props: {
        routers: Array
    },

    components: {
        NavLink
    }
}
</script>
