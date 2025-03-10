<template>
  <div id="table" class="periodic-table">
    <div v-for="element in elements" :key="element.number"
      :class="['element', `element-${element.number}`, element.category]" :title="element.name"
      @mouseover="(event) => showInfo(element, event)" @mouseleave="hideInfo">
      <a :href="element.source" rel="noopener noreferrer" target="_blank">
        <ElementSymbol :number="element.number" size="small" />
      </a>
    </div>
    <div v-if="selectedElement" class="info-card">
      <p>{{ selectedElement.name }}</p>
      <p>{{ selectedElement.summary }}</p>
      <p>{{ selectedElement.category }}</p>
      <p>{{ selectedElement.phase }}</p>
    </div>
  </div>
</template>

<script>
import dataPT from "../logic/periodic-table.json";
import { defineComponent } from 'vue';
import ElementSymbol from "./Element-Symbol.vue";

export default defineComponent({
  name: 'Periodic-Table',
  components: {
    ElementSymbol
  },
  data() {
    return {
      elements: dataPT.elements,
      selectedElement: null,
      mouseX: 0,
      mouseY: 0
    };
  },
  methods: {
    showInfo(element) {
      this.selectedElement = element;
      // Actualiza las propiedades CSS con la posición del mouse
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    },
    hideInfo() {
      this.selectedElement = null;
    }
  },
});
</script>

<style scoped>
.periodic-table {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  /* 18 columnas para acomodar elementos */
  gap: 5px;
  width: 95%;
  margin: 0 auto;
}

.info-card {
  position: absolute;
  z-index: 1100; /* Asegúrate de que esté encima */
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  pointer-events: none; /* Para evitar interferencias con el mouse */
  transform: translate(-50%, -100%);
  /* Tamaño fijo */
  width: 300px;
  max-width: 300px;
  max-height: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Permite que el texto ocupe varias líneas */
}

/* Asegura que la card no se salga de la pantalla */
.info-card {
  left: max(10px, min(calc(100vw - 210px), var(--mouse-x)));
  top: max(10px, min(calc(100vh - 160px), var(--mouse-y)));
}

.element {
  border-radius: 2px;
  transition: transform 0.2s;
}

.element a {
  display: block;
  text-decoration: none;
  color: inherit;
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

.element-2 {
  grid-column-start: -2;
}

/* Boron & Alumunium to the right  */
.element-5,
.element-13 {
  grid-column-start: 13;
}

/* Not needed anymore since I decided to fill them with first elements */

.element-72 {
  grid-column-start: 4;
  grid-row: 6;
}

.element-73 {
  grid-column-start: 5;
  grid-row: 6;
}

.element-74 {
  grid-column-start: 6;
  grid-row: 6;
}

.element-75 {
  grid-column-start: 7;
  grid-row: 6;
}

.element-76 {
  grid-column-start: 8;
  grid-row: 6;
}

.element-77 {
  grid-column-start: 9;
  grid-row: 6;
}

.element-78 {
  grid-column-start: 10;
  grid-row: 6;
}

.element-79 {
  grid-column-start: 11;
  grid-row: 6;
}

.element-80 {
  grid-column-start: 12;
  grid-row: 6;
}

.element-104 {
  grid-column-start: 4;
  grid-row: 7;
}

.element-105 {
  grid-column-start: 5;
  grid-row: 7;
}

.element-106 {
  grid-column-start: 6;
  grid-row: 7;
}

.element-107 {
  grid-column-start: 7;
  grid-row: 7;
}

.element-108 {
  grid-column-start: 8;
  grid-row: 7;
}

.element-109 {
  grid-column-start: 9;
  grid-row: 7;
}

.element-110 {
  grid-column-start: 10;
  grid-row: 7;
}

.element-111 {
  grid-column-start: 11;
  grid-row: 7;
}

.element-112 {
  grid-column-start: 12;
  grid-row: 7;
}

.element-113 {
  grid-column-start: 13;
  grid-row: 7;
}

.element-87 {
  grid-column-start: 1;
  grid-row: 7;
}

.element-88 {
  grid-column-start: 2;
  grid-row: 7;
}

.element-89 {
  grid-column-start: 3;
  grid-row: 7;
}

.element-81 {
  grid-column-start: 13;
  grid-row: 6;
}

.element-82 {
  grid-column-start: 14;
  grid-row: 6;
}

.element-83 {
  grid-column-start: 15;
  grid-row: 6;
}

.element-84 {
  grid-column-start: 16;
  grid-row: 6;
}

.element-114 {
  grid-column-start: 14;
  grid-row: 7;
}

.element-115 {
  grid-column-start: 15;
  grid-row: 7;
}

.element-116 {
  grid-column-start: 16;
  grid-row: 7;
}

.element-85 {
  grid-column-start: 17;
  grid-row: 6;
}

.element-117 {
  grid-column-start: 17;
  grid-row: 7;
}

.element-86 {
  grid-column-start: 18;
  grid-row: 6;
}

.element-118 {
  grid-column-start: 18;
  grid-row: 7;
}

/* Lanthinide & Actinoid split  */
.element-58,
.element-90 {
  grid-column-start: 3;
}

/* Disable the top space for the first lathenide which sits inside the table  */
.element-57 {
  margin: 0;
}
</style>
