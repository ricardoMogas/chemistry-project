<template>
  <div>
    <h1>Periodic Table</h1>
    <div class="scroll">
      <PeriodicTable />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PeriodicTable from '../components/Periodic-Table.vue';

@Component({
  name: 'PeriodicTableView',
  components: {
    PeriodicTable,
  },
})
export default class PeriodicTableView extends Vue {
}
</script>

<style>
.scroll {
  overflow: auto;
  height: 100vh;
}
</style>