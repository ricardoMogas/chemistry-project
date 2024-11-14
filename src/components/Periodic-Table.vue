<template>
    <div id="table" class="periodic-table">
        <div v-for="element in elements" :key="element.number"
            :class="['element', `element-${element.number}`, element.category]" :title="element.name">
            <a :href="element.source" rel="noopener noreferrer" target="_blank">
                <div class="number">{{ element.number }}</div>
                <div class="symbol">{{ element.symbol }}</div>
                <div class="element-name">{{ element.name }}</div>
            </a>
        </div>
    </div>
</template>

<script>
import dataPT from "../logic/periodic-table.json";
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Periodic-Table',
    data() {
        return {
            elements: dataPT.elements,
        };
    },
    methods: {
    },
});
</script>
<style scoped>
.periodic-table {
  display: grid;
  grid-template-columns: repeat(18, 1fr); /* 18 columnas para acomodar elementos */
  gap: 5px;
}

.element {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  transition: transform 0.2s;
}
.element:hover {
  transform: scale(1.05);
}

.number {
  font-size: 12px;
  font-weight: bold;
}

.symbol {
  font-size: 18px;
  font-weight: bold;
}

.element-name {
  font-size: 10px;
}
</style>