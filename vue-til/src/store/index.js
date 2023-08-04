import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickname: '',
  },
  // getters : state의 값이 변경되었을 경우 특정 상태를 개선
  getters: {
    isLogin(state) {
      return state.nickname !== '';
    },
  },
  mutations: {
    setUserName(state, payload) {
      state.nickname = payload;
    },
  },
});
