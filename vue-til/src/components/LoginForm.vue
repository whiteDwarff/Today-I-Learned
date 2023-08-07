<template>
  <form @submit.prevent="submitForm">
    <div :class="{ 'invalid-input': usernameState }" class="border-box">
      <label for="username">EMAIL</label>
      <input v-model="username" id="username" type="email" />
    </div>
    <div :class="{ 'invalid-input': passwordState }" class="border-box">
      <label for="password">PASSWORD</label>
      <input v-model="password" id="password" type="password" />
    </div>
    <!-- disabled : form의 submit을 제어, v-bind을 통해  isUserNameValid()의 값이 false인 경우 submit 제출x -->
    <button
      :disabled="!isUserNameValid || !password"
      type="submit"
      class="submit-button"
      :class="!isUserNameValid || !password ? 'disabled' : null"
    >
      LOGIN
    </button>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      usernameState: false,
      passwordState: false,
    };
  },
  computed: {
    // username이 입력될때마다 실행, 실시간으로 사용자의 입력을 검사
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        let userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        // router-link to =""와 동일함, main 페이지로 이동 ***
        this.$router.push('/main');
      } catch (error) {
        // 에러 처리
        if (error.response.data == 'Authentication failed. Wrong password.') {
          alert('비밀번호가 일치하지 않습니다.');
          this.passwordState = true;
        } else if (
          error.response.data == 'Authentication failed. User not found.'
        ) {
          alert('등록된 정보가 존재하지 않습니다.');
          this.usernameState = true;
        }
      } finally {
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
