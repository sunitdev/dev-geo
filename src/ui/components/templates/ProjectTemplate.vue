<template>
    <div class="container h-full mx-auto py-4 flex">
        <div jest="controls" class="w-1/3">
            <slot name="controls"></slot>
        </div>

        <div jest="map" class="w-2/3">
            <slot name="map"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-template'
};
</script>
