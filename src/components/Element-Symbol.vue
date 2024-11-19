<template>
    <div id="element" class="element" :style="[elementStyle, { backgroundColor: color }]">
        <div class="element-number">{{ number }}</div>
        <div class="element-symbol">{{ symbol }}</div>
        <div class="element-name">{{ name }}</div>
        <div class="element-atomic-mass">{{ atomicMass }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Element-Symbol',
    props: {
        number: {
            type: Number,
            required: true
        },
        symbol: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        atomicMass: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'medium'
        }
    },
    computed: {
        elementStyle(): object {
            const sizes = {
                small: '50px',
                medium: '100px',
                large: '150px'
            };
            const size = sizes[this.size] || sizes.medium;
            return {
                width: size,
                height: size
            };
        }
    }
});
</script>

<style scoped>
.element {
    display: flex;
    border: 1px solid black;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.element-number {
    font-size: 1.5em;
    font-weight: bold;
}
.element-symbol {
    font-size: 2em;
    font-weight: bold;
}
.element-name {
    font-size: 1em;
}
.element-atomic-mass {
    font-size: 1em;
}

</style>