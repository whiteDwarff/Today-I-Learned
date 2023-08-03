<template>
  <form @submit.prevent="submitForm">
    <div class="border-box">
      <label for="username">ID</label>
      <input v-model="username" id="username" type="email" />
    </div>
    <div class="border-box">
      <label for="password">PASSWORD</label>
      <input v-model="password" id="password" type="password" />
    </div>
    <button type="submit" class="submit-button">SUBMIT</button>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      if (this.username == '' || this.password == '') {
        alert('빈칸을 모두 입력해주세요');
      } else {
        let userData = {
          username: this.username,
          password: this.password,
        };
        let { data } = await loginUser(userData);
        alert('로그인이 성공되었습니다.');
        console.log(data);
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
