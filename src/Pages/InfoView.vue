<template>
  <div>
    <h1>El Átomo y Concepto</h1>
    <hr>

    <div class="grid-content">
      <img src="../assets/atom-parts.png" alt="" class="atom-image">
      <div class="card">
        <h3><strong>Concepto</strong></h3>
        <p>
          Parte más pequeña de una sustancia que no se puede descomponer químicamente. Cada átomo tiene un núcleo (centro) compuesto de protones (partículas positivas) y neutrones (partículas sin carga). Los electrones (partículas negativas) se mueven alrededor del núcleo. Los átomos de diferentes elementos contienen diferentes números de protones, neutrones y electrones. 
        </p>
        <div class="more-info">
          <a href="https://www.ferrovial.com/es/stem/atomos/" target="_blank" rel="noopener noreferrer">?</a>
        </div>
      </div>
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

.atom-image {
  transition: transform 0.2s, box-shadow 0.2s;
}

.atom-image:hover {
  transform: scale(1.05);
}

.card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, border-color 0.2s;
  position: relative;
  border: 5px solid transparent;
}

.card:hover {
  transform: scale(1.05);
  border-color: var(--primary-color);
}

.more-info {
  display: none;
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--primary-color);
}
.more-info a {
  text-decoration: none;
  color: white;
}

.card:hover .more-info {
  display: block;
}

@media (max-width: 768px) {
  .grid-content {
    grid-template-columns: 1fr;
    margin: auto 20px;
  }
}
</style>