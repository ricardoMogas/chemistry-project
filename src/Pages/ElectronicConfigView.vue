<template>
  <div>
    <h1>Configuración Electronica</h1>
    <div class="grid-container">
      <img class="img-grid" src="../assets/Config-Electronic.png" alt="">
      <section class="config-grid">
        <div class="element">
          <ElementSymbol :number="elementNumber" size="large" />
        </div>
        <input type="number" v-model.number="elementNumber" style="height: 50px;">
        <SButton height="60" color="primary" @click="setMode(1)">Generate</SButton>
        <SButton height="60" color="secondary" @click="setMode(2)">Practice</SButton>
      </section>
      <section class="modes-grid">
        <!-- Modo Practice -->
        <div v-if="mode === 2">
          <h4 class="title">Practice Mode</h4>
          <div class="mode-practice">
            <div class="boxes">
              <div class="box">←</div>
              <div class="box element">
                <ElementSymbol :number="elementNumber" size="small" />
              </div>
              <div class="box">→</div>
            </div>
            <div class="input-container">
              <input v-model="userInput" placeholder="2s2 2p2">
              <SButton color="success" @click="checkAnswer">Comprobar</SButton>
            </div>
            <p v-if="isCorrect">¡Correcto!</p>
            <p v-else-if="isCorrect === false">Incorrecto, intenta de nuevo.</p>
          </div>
        </div>
        
        <!-- Modo Generate -->
        <div v-if="mode === 1">
          <h4 class="title">Generate Mode</h4>
          <p v-if="electronConfig">{{ electronConfig }}</p>
          <p v-else>Elemento no encontrado</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import SButton from '../components/S-Button.vue';
import ElementSymbol from '../components/Element-Symbol.vue';
import { getElectronConfig, getRandomElement, ElementData } from '../logic/electronConfig';

@Component({
  name: 'ElectronicConfigView',
  components: {
    SButton,
    ElementSymbol,
  },
})
export default class ElectronicConfigView extends Vue {
  mode = 1; // 1 = Generate, 2 = Practice
  elementNumber = 1; // Número del elemento
  electronConfig: string | null = '';
  userInput = '';
  isCorrect: boolean | null = null;

  // Método para cambiar el modo
  setMode(newMode: number) {
    this.mode = newMode;
    if (newMode === 2) {
      this.setRandomElement();
    }
  }

  @Watch('elementNumber')
  onElementNumberChanged(newVal: number) {
    this.electronConfig = getElectronConfig(newVal);
  }

  setRandomElement() {
    const randomElement: ElementData = getRandomElement();
    this.elementNumber = randomElement.number;
    this.electronConfig = getElectronConfig(randomElement.number);
    this.userInput = '';
    this.isCorrect = null;
  }

  checkAnswer() {
    if (this.userInput === this.electronConfig) {
      this.isCorrect = true;
      this.setRandomElement();
    } else {
      this.isCorrect = false;
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  margin: 0 25%;
}

.config-grid {
  display: grid;
  grid-template-rows: 2fr 1fr;
  gap: none;
}

.config-grid input {
  margin: 14px;
  grid-row: 2 / 3;
}

.config-grid button {
  margin: 14px;
}

.img-grid {
  grid-column: 1 / 2;
  width: auto;
  height: auto;
  margin: 0 auto;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.modes-grid {
  grid-column: 1 / 3;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}

.modes-grid .title {
  margin: 0;
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
  position: absolute;
  /* Posiciona el título de forma absoluta */
  top: -10px;
  /* Ajusta según sea necesario para colocarlo encima del borde */
  left: 10%;
  transform: translateX(-50%);
  /* Centra el título horizontalmente */
  padding: 0 10px;
  /* Añade un poco de padding para que el fondo del título sea más visible */
}

.element {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modes */

/* Responsive */

@media screen and (max-width: 1264px) {
  .grid-container {
    grid-template-columns: 1fr;
    margin: 0;
  }

  .config-grid {
    grid-column: 1 / 2;
  }

  .config-grid input {
    margin: 0;
  }

  .config-grid button {
    margin: 0;
  }

  .img-grid {
    grid-column: 1 / 2;
    width: 100%;
    height: auto;
  }

}
</style>