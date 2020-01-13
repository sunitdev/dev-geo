<template>
    <div class="h-screen flex flex-col">
        <github-corner></github-corner>
        <header>
            <slot name="header"></slot>
        </header>
        <section class="flex-grow">
            <slot name="content"></slot>
        </section>
    </div>
</template>

<script>
import GithubCorner from '@/components/atoms/GithubCorner.vue';

export default {
    name: "app-template",

    components: {
        GithubCorner
    }
};
</script>
