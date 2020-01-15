<template>
    <div class="relative">
        <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="selectedOption"
            @change="selectChanged($event)">
            <option v-for="option in options" :value="option.value">{{ option.text }}</option>
        </select>
        <div
            jest="pointer-container"
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" >
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" >
                <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-select',

    props: {
        options: Array,
        selectedIndex: Number,
        onChanged: Function
    },

    data() {
        return {
            selectedOption: null
        }
    },

    watch: {
        selectedIndex(index) {
            if(index !== null){
                this.selectedOption = this.options[index].value;
                this.onChanged(this.selectedOption);
            }
        }
    },

    methods: {
        selectChanged(event){
            this.onChanged(this.selectedOption);
        }
    }
};
</script>
