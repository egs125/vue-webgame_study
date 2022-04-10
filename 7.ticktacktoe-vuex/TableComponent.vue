<template>
  <table>
    <slot></slot>
  </table>
</template>

<script>
import TrComponent from '../7.ticktacktoe/TrComponent.vue';
  export default {
  components: { TrComponent },
  };
</script>

<!--
<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData" :key="index" :row-index="index"></tr-component>
  </table>
</template>

<script>
  import TrComponent from './TrComponent';

  export default {
    components: {
      TrComponent,
    },
    computed: {
      tableData() {
        return this.$store.state.tableData;
      },
      turnMessage() {
        return this.$store.getters.turnMessage;
      },
      // getter 여러개 사용 시 mapGetters 사용 가능
      ...mapGetters({ ... })
    },
  };
</script>
-->