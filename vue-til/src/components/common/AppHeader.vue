<template>
  <header>
    <div class="flex-box">
      <h1><router-link to="/">📝 Today I Learned</router-link></h1>
      <small v-if="isUserLogin" class="small">
        by {{ $store.state.nickname }}
      </small>
    </div>
    <div>
      <!-- template : 분기처리, 조건에 맞게 UI를 노출  -->
      <template v-if="isUserLogin">
        <!-- javascript:;  :  javascript의 기본동작을 제어 -->
        <a href="javascript:;" @click="logoutUser" class="small">logout</a>
      </template>
      <template v-else>
        <router-link to="/login" class="after">login</router-link>
        <router-link to="/signup">join</router-link>
      </template>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    isUserLogin() {
      // 현재 this는 Vue 구성요소, store는 Vue의 instance로  연결되어 있음
      // stroe는 component에서 바로 접근하는 방법은 좋지 않음.
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUserName');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 100px;
}
.flex-box {
  display: flex;
  align-items: baseline;
}
.small {
  font-size: 10px;
  display: block;
  margin-left: 10px;
}
.after::after {
  content: '|';
  display: inline-block;
  margin: 0 10px;
  color: #ccc;
}
</style>
