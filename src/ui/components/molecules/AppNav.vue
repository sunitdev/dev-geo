<template>
    <nav class="flex flex-row">
        <nav-link v-for="route in routers" class="mx-4">{{ route.text }}</nav-link>
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
