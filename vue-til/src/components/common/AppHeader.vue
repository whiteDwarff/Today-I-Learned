<template>
  <header>
    <div class="flex-box">
      <div>
        <h1>
          <router-link :to="logoLink" class="bold"
            >📝 Today I Learned</router-link
          >
        </h1>
        <small v-if="isUserLogin" class="small">
          by {{ $store.state.nickname }}
        </small>
      </div>
      <div>
        <!-- template : 분기처리, 조건에 맞게 UI를 노출  -->
        <template v-if="isUserLogin">
          <!-- javascript:;  :  javascript의 기본동작을 제어 -->
          <a href="javascript:;" @click="logoutUser" class="small hover">
            logout
          </a>
        </template>
        <template v-else>
          <router-link to="/login" class="after small hover">login</router-link>
          <router-link to="/signup" class="small hover">join</router-link>
        </template>
      </div>
    </div>
  </header>
</template>
<script>
import { deleteCookie } from '@/utils/cookies';
import { deleteStorage } from '@/utils/localStorage';

export default {
  computed: {
    isUserLogin() {
      // 현재 this는 Vue 구성요소, store는 Vue의 instance로  연결되어 있음
      // stroe는 component에서 바로 접근하는 방법은 좋지 않음.
      return this.$store.getters.isLogin;
    },
    logoLink() {
      // vuex의 state의 nickname 값에 따라 path 변경
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      if (confirm('Would you like to log out?')) {
        this.$store.commit('clearUserName');
        this.$store.commit('clearToken');
        // this.$router.push('/');
        if (this.$route.path !== '/login') this.$router.push('/login');
        deleteCookie('til_user');
        deleteCookie('til_auth');
        deleteStorage();
      }
    },
  },
};
</script>

<style scoped>
header {
  padding: 10px 20px;
  margin-bottom: 100px;
  border-bottom: 1px solid #ccc;
}
.flex-box {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.flex-box div:first-child {
  display: flex;
  align-items: baseline;
}
.small {
  font-size: 10px;
  display: inline-block;
  margin-left: 10px;
}
.after::after {
  content: '|';
  display: inline-block;
  margin: 0 10px;
  color: #ccc;
}
.hover:hover {
  color: #fe9616;
  transition: 0.5s ease-out;
}
</style>
