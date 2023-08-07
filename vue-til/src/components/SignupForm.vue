<template>
  <!-- .prevent : submit event 발생 시 화면의 새로고침을 제어 -->
  <form @submit.prevent="submitForm">
    <div class="border-box">
      <label for="username">EMAIL</label>
      <!-- v-model : 사용자의 입력값이 data에 저장 -->
      <input v-model="username" id="username" type="email" />
    </div>
    <div class="border-box">
      <label for="password">PASSWORD</label>
      <input v-model="password" id="password" type="password" />
    </div>
    <div class="border-box">
      <label for="nickname">NICKNAME</label>
      <input v-model="nickname" id="nickname" type="text" />
    </div>
    <button
      :disabled="!isUserNameValid || !password || !nickname"
      type="submit"
      class="submit-button"
      :class="!isUserNameValid || !password || !nickname ? 'disabled' : null"
    >
      CREATE ACCOUNT
    </button>
  </form>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  // vda -> tap : data()구문 자동완성
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
  computed: {
    // username이 입력될때마다 실행, 실시간으로 사용자의 입력을 검사
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    // form의 submit event
    async submitForm() {
      try {
        let userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        // 구조 분해 할당
        // await registerUser(userData);의 data의 속성을 data에 바로 할당
        // 배열에서 원하는 값을 추출하여 변수에 할당하는 기능
        // 변수의 이름이 객체의 속성과 일치하기 때문
        await registerUser(userData);
        alert(
          'Membership registration is complete. Please log in to use our services.',
        );
        this.$router.push('/login');
      } catch (error) {
        if (error.response.data.driver)
          alert('Do you have existing information for this registration?');
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>
<style scoped>
.align-center {
  text-align: center;
  margin-top: 30px;
}
</style>
