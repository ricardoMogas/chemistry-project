<template>
  <div>
    <h1>Electronic Config</h1>
    <div class="grid-container">
      <img class="img-grid" src="../assets/Config-Electronic.png" alt="">
      <div class="config-grid">
        <div class="element">
          <div class="atomic-number">6</div>
          <div class="symbol">C</div>
          <div class="name">Carbon</div>
          <div class="atomic-mass">12.011</div>
        </div>
        <input type="text" style="height: 50px;">
        <SButton height="60">Generate</SButton>
        <SButton height="60">Practice</SButton>
      </div>
      <div class="modes-grid">
        <button class="practice-mode">Practice Mode</button>
        <div class="boxes">
          <div class="box">←</div>
          <div class="box element">
            <div>6</div>
            <div>C</div>
            <div>CARBONO</div>
            <div>12.011</div>
          </div>
          <div class="box">→</div>
        </div>
        <div class="input-container">
          <input placeholder="2s2 2p2">
          <button>Comprobar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SButton from '../components/S-Button.vue';

@Component({
  name: 'ElectronicConfigView',
  components: {
    SButton,
  },
})
export default class PeriodicTableView extends Vue {

}
</script>

<style>
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
}


@media screen and (max-width: 768px) {
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