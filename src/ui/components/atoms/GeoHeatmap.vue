<template>
    <div class="w-full h-full"></div>
</template>

<style></style>

<script>
export default {
    name: 'geo-heatmap',

    props: {
        countryData: Object
    },

    watch: {
        countryData: function(value) {
            const map = $(this.$el).vectorMap('get', 'mapObject');
            map.series.regions[0].clear();
            map.series.regions[0].setValues(value);
        }
    },

    mounted: function() {
        let vm = this;

        $(this.$el).vectorMap({
            map: 'world_mill_en',
            series: {
                regions: [
                    {
                        scale: ['#C8EEFF', '#0071A4'],
                        min: 0,
                        max: 100
                    }
                ]
            },
            onRegionTipShow: function(e, el, code) {
                if(code in vm.countryData) {
                    el.html(`${el.html()} - ${Math.ceil(vm.countryData[code])}%`);
                } else {
                    el.html(`${el.html()} - 0%`);
                }
            }
        });
    }
};
</script>
