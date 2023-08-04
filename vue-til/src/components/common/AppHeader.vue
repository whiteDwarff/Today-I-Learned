<template>
  <header>
    <h1><router-link to="/">Today I Learned</router-link></h1>
    <div>
      <template v-if="isUserLogin">
        <span class="username">{{ $store.state.nickname }}님 반갑습니다. </span>
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
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: cyan;
}
/* header * {
  color: #fff;
} */
.after::after {
  content: '|';
  display: inline-block;
  margin: 0 10px;
}
.username {
  color: #000;
}
</style>
