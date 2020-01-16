<template>
    <div class="w-full h-full"></div>
</template>

<style></style>

<script>
export default {
    name: 'geo-heatmap',

    mounted: function() {
        $(this.$el).vectorMap({
            map: 'world_mill_en',
        });
    }
};
</script>
