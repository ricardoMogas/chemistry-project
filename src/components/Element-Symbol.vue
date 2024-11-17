<template>
    <div id="element" class="periodic-table">
    </div>
</template>

<script>
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name: 'Element-Symbol',
    props: {
        symbol: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        name: {
            type: String ,
            required: true
        },
        atomicMass: {
            type: Number,
            required: true
        }
        
    },
    data() {
        return {
        };
    },
    methods: {
    },
});
</script>
<style scoped>
</style>