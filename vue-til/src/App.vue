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
  font-weight: normal;
  list-style: none;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}
form label {
  display: inline-block;
  width: 20%;
  font-size: 10px;
  font-weight: 300;
}
input {
  border: none;
  outline: none;
  width: 80%;
  font-size: 12px;
  box-sizing: border-box;
}
.form-wrap {
  width: 35%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.border-box {
  padding: 10px 20px;
  border-bottom: 1px solid #000;
}
.submit-button {
  width: 100%;
  display: block;
  padding: 10px;
  margin: 50px 0 0 auto;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  background: #000;
  color: #fff;
  cursor: pointer;
}
.disabled {
  background-color: #ccc;
}
.bold {
  font-weight: bold;
}
.invalid-input {
  transition: 0.4s ease-in;
  border-bottom: 1px solid red;
}
</style>
