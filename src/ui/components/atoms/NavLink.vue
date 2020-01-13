<template>
    <router-link :to='to'>
        <span class="text-2xl underline"><slot></slot></span>
    </router-link>
</template>

<script>
export default {
    name: 'nav-link',
    props: {
        to: String
    }
}
</script>
