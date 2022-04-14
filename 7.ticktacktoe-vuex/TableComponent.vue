<template>
  <table>
    <slot></slot> <!-- TickTackToe.vue에서 미리 TableComponent의 하위 컴포넌트로 Tr, Td 선언. 여기서는 그 하위 컴포넌트들이 그려질 자리로 slot만 선언 -->
  </table>
</template>

<script>
import TrComponent from '../7.ticktacktoe-vuex/TrComponent.vue';
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