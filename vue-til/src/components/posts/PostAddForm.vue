<template>
  <div class="wrapper">
    <h6 class="bold">CREATE POST</h6>
    <form @submit.prevent="submitForm">
      <div class="border-box">
        <label for="title">TITLE</label>
        <input v-model="title" id="title" type="text" />
      </div>
      <div
        :class="{ 'invalid-input': !isContentValid }"
        class="border-box"
        id="flex"
      >
        <label for="content">CONTENT</label>
        <textarea v-model="content" id="content" type="text" rows="10" />
      </div>
      <span v-if="!isContentValid" class="validation-text">
        Contents length must be less then 200
      </span>
      <button type="submit">SUBMIT<i class="fa-solid fa-pen" /></button>
    </form>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      content: '',
      log: '',
    };
  },
  computed: {
    isContentValid() {
      return this.content.length < 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        await createPost({
          title: this.title,
          contents: this.content,
        });
        this.$router.push('/main');
      } catch (err) {
        if (this.title == '' || this.content == '') {
          alert('빈칸을 모두 입력해주세요.');
        } else if (err.response.data.message) {
          alert('해당 제목으로 등록된 내용이 있습니다.');
        }
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.title = '';
      this.content = '';
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 60%;
  margin: 0 auto;
}
h6 {
  margin-bottom: 50px;
}
form {
  width: 100%;
  margin: 0 auto;
}
label {
  width: 20%;
  font-size: 14px;
}
textarea,
input {
  width: 80%;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
}
textarea {
  height: 300px;
  resize: none;
}
#flex {
  display: flex;
  align-items: flex-start;
}
button {
  padding: 10px 20px;
  display: block;
  margin: 30px 0 0 auto;
  border: none;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.fa-solid {
  display: inline-block;
  margin-left: 10px;
  color: #fff;
}
.validation-text {
  color: #f00;
  text-align: right;
  display: block;
  margin-top: 20px;
}
.invalid-input {
  transition: 0.4s ease-in;
  border-bottom: 1px solid red;
}
</style>
