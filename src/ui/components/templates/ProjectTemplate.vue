<template>
    <div class="container h-full mx-auto py-4 flex">
        <div jest="controls" class="flex-grow">
            <slot name="controls"></slot>
        </div>

        <div jest="map" class="flex-grow">
            <slot name="map"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-template'
};
</script>
