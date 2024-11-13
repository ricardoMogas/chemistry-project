<template>
  <div>
    <h1>The Atom And Concept</h1>
    <hr>

    <div grid-content>
      <img src="../assets/atom-parts.png" alt="" height="300" width="400">
      <p>
        An atom is the smallest unit of matter that has the properties of a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small, typically around 100 picometers across. They are so small that accurately predicting their behavior using classical physics—as if they were billiard balls, for example—is not possible due to quantum effects.
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
  gap: 20px;
}
</style>