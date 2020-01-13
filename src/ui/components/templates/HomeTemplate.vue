<template>
    <div class="container h-full mx-auto py-4 flex flex-col justify-center">
        <div
            jest="logo-desc-container"
            class="flex-grow flex flex-col items-center">
            <slot name="logo"></slot>
            <div
                jest="desc-wrapper"
                class="mt-10">
                <slot name="description"></slot>
            </div>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "home-template"
};
</script>
