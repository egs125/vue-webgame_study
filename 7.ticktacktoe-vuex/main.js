import Vue from 'vue';
import TickTackToe from './TickTackToe';

new Vue({
  render: createElement => createElement(TickTackToe)
}).$mount('#root');