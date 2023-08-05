import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickname: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  // getters : state의 값이 변경되었을 경우 특정 상태를 개선
  // component의 computed와 같은 개념
  getters: {
    // nickname이 ''이 아니면 true를 반환
    isLogin(state) {
      return state.nickname !== '';
    },
  },
  mutations: {
    // 로그인 여부 확인
    setUserName(state, payload) {
      state.nickname = payload;
    },
    // 로그아웃
    clearUserName(state) {
      state.nickname = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // context 객체엔 commit 속성이 있음. { commit }으로 바로 접근
    async LOGIN({ commit }, userData) {
      let { data } = await loginUser(userData);
      // store의 mutataions에 접근
      // setUserName : method, this.data.username: parameter
      commit('setUserName', data.user.nickname);
      commit('setToken', data.token);
      // brower cookie 저장소에 사용자의 정보 저장
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.nickname);
      return data;
    },
  },
});
