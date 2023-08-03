<template>
  <div>
    <AppHeader />
    <!-- router view가 보여지는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>
// vim -> tab -> import 구문 자동완성
import AppHeader from './components/common/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: black;
  text-decoration: none;
  font-size: 16px;
  list-style: none;
}
form {
  font-weight: 200;
}
form label {
  display: inline-block;
  width: 20%;
  font-size: 12px;
}
input {
  border: none;
  outline: none;
  width: 80%;
  font-size: 12px;
  box-sizing: border-box;
}
.form-wrap {
  width: 40%;
  margin: 0 auto;
}
.form-title {
  margin-bottom: 30px;
}
.border-box {
  padding: 10px 20px;
  border-bottom: 1px solid #000;
}
.submit-button {
  display: block;
  padding: 10px;
  margin: 30px 0 0 auto;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  background: #f00;
  color: #fff;
  cursor: pointer;
}
</style>
