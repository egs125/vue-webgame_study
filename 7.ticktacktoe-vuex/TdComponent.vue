<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
  import { mapState } from 'vuex';
  import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';
  export default {
    props: {
      rowIndex: Number,
      cellIndex: Number,
    },
    computed: { // vuex의 데이터를 쓰기 위해서는 반드시 computed에서 연결
      ...mapState({
        tableData: state => state.tableData,
        turn: state => state.turn,
        cellData(state) {
          return state.tableData[this.rowIndex][this.cellIndex];
        },
      }),
      // ...mapState(['winner', 'turn']),
      
      // ...mapState({
      //   winner(state) {
      //     return state.winner + this.data;
      //   },
      // }) 

      // cellData() {
      //   return this.$store.state.tableData[this.rowIndex][this.cellIndex];
      // },
      // tableData() {
      //   return this.$store.state.tableData;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // },
    },
    methods: {
      onClickTd() {
        if ( this.cellData ) return;

        this.$store.commit(CLICK_CELL, { row: this.rowIndex, cell: this.cellIndex });

        let win = false; 
      }
    }
  };
</script>