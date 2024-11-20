<template>
  <div>
    <h1>El Átomo y Concepto</h1>
    <hr>

    <div class="grid-content">
      <img src="../assets/atom-parts.png" alt="" height="300" width="400">
      <p>
        Parte más pequeña de una sustancia que no se puede descomponer químicamente. Cada átomo tiene un núcleo (centro) compuesto de protones (partículas positivas) y neutrones (partículas sin carga). Los electrones (partículas negativas) se mueven alrededor del núcleo. Los átomos de diferentes elementos contienen diferentes números de protones, neutrones y electrones. 
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoView',
});
</script>

<style scoped>
hr {
  border: 0;
  height: 2px;
  background: #333;
  width: 50%;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  margin: 20px auto;
}

.grid-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin: auto 100px;
}

@media (max-width: 768px) {
  .grid-content {
    grid-template-columns: 1fr;
    margin: auto 20px;
  }
}
</style>