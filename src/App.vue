<template>
  <div id="app">
    <div :class="['Grid-icons', { 'navbar': isNavbar }]">
      <span @click="comeBackHomme()">
        <Atom :size="isNavbar ? 50 : 250" />
      </span>
      <h1 class="title">EL ÁTOMO</h1>
      <div :class="['Grid-Buttons', { 'navbar-buttons': isNavbar }]">
        <SButton color="primary" :size="isNavbar ? 'small' : 'large'" @click="selectView('Info')">
          Información 📖
        </SButton>
        <SButton color="secondary" :size="isNavbar ? 'small' : 'large'" @click="selectView('periodic-table')">
          Tabla periodica 🧪
        </SButton>
        <SButton color="tertiary" :size="isNavbar ? 'small' : 'large'" @click="selectView('electronic-config')">
          Config. Electronica ⚙
        </SButton>
      </div>
    </div>
    <div :class="['View-Container', { 'with-navbar': isNavbar }]">
      <component :is="currentViewComponent"></component>
    </div>
  </div>
</template>


<script lang="ts">
import "@/assets/styles.css";
import { Component, Vue } from 'vue-property-decorator';
import SButton from './components/S-Button.vue';
import Atom from './components/Atom.vue';
import InfoView from "./Pages/InfoView.vue";
import PeriodicTableView from "./Pages/PeriodicTableView.vue";
import ElectronicConfigView from "./Pages/ElectronicConfigView.vue";
import ProjectView from "./Pages/ProjectView.vue";
@Component({
  components: {
    SButton,
    Atom,
    InfoView,
    PeriodicTableView,
    ElectronicConfigView,
    ProjectView,
  },
})
export default class App extends Vue {
  currentView = 'home';
  isNavbar = false;

  selectView(view: string) {
    this.currentView = view;
    this.isNavbar = true;
  }

  comeBackHomme() {
    this.currentView = 'home';
    this.isNavbar = false;
  }

  get currentViewComponent() {
    switch (this.currentView) {
      case 'Info':
        return 'InfoView';
      case 'periodic-table':
        return 'PeriodicTableView';
      case 'electronic-config':
        return 'ElectronicConfigView';
      default:
        return 'ProjectView';
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.Grid-icons {
  transition: all 0.5s ease;
}
.Grid-Buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 40%;
  margin: 0 auto;
}
.View-Container {
  margin-top: 20px;
  transition: margin-top 0.5s ease;
}

.navbar {
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  top: 0;
  width: 100%;
  background-color: #f8f9fa;
  z-index: 1000;
}
.navbar h1 {
  margin: 0;
  font-size: 24px;
  align-self: center;
}
.navbar span {
  align-self: center;
  cursor: pointer;
}
.navbar-buttons {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 10px 0;
}
.with-navbar {
  margin-top: 80px; /* Ajusta este valor según la altura de tu navbar */
}

@media screen and (max-width: 768px) {
  .Grid-Buttons {
    grid-template-columns: 1fr;
    width: 80%;
  }

}
</style>
