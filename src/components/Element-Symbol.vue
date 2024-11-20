<template>
    <div v-if="element" :class="['element', element.category]" :style="[elementStyle]">
        <div class="element-number">{{ element.number }}</div>
        <div class="element-symbol">{{ element.symbol }}</div>
        <div class="element-name">{{ element.name }}</div>
    </div>
    <div v-else class="element-not-found">
        Elemento no encontrado
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue';
import elementsData from '../logic/periodic-table.json';

export default defineComponent({
    name: 'Element-Symbol',
    props: {
        number: {
            type: Number,
            required: true
        },
        size: {
            type: String as PropType<'small' | 'medium' | 'large'>,
            default: 'medium'
        }
    },
    data() {
        return {
            element: null as any
        };
    },
    computed: {
        elementStyle(): object {
            const sizes = {
                small: '60px',
                medium: '110px',
                large: '120px'
            };
            const size = sizes[this.size] || sizes.medium;
            return {
                width: size,
                height: size,
                fontSize: this.size === 'small' ? '0.5em' : this.size === 'large' ? '1em' : '0.8em'
            };
        }
    },
    created() {
        this.updateElement();
    },
    watch: {
        number: 'updateElement'
    },
    methods: {
        updateElement() {
            this.element = elementsData.elements.find((el: any) => el.number === this.number);
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

.element-not-found {
    text-align: center;
    color: red;
    font-size: 1.5em;
    margin-top: 20px;
}

/* Noble Gas  */
.noble {
    background: #f3d2e8;
}

/* Alkali Metal  */
.alkali {
    background: #f88379;
}

/* Alkaline Earth Metal  */
.alkaline {
    background: #ffc3a0;
}

/* Transition Metal  */
.transition {
    background: #e9ff08;
}

/* Polyatomic Non Metal  */
.polyatomic {
    background: #a3d2d5;
}

/* Diatomic Non Metal  */
.diatomic {
    background: #a3d5bf;
}

/* Post Transition Metal  */
.post-transition {
    background: #8eb1e7;
}

/* Metalloid  */
.metalloid {
    background: #5ed89c;
}

/* Lanthanide  */
.lanthanide {
    background: #cc99ff;
}

/* Actinide  */
.actinide {
    background: #ad87bd;
}
</style>