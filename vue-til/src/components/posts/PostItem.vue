<template>
  <li class="post-items">
    <div class="post-wrap">
      <div class="post-flex-box">
        <h6 class="post-title">🔗 {{ postItem.title }}</h6>
        <!-- 전역으로 선언한 filter, formatData method를 사용 -->
        <small class="post-time">{{ postItem.createdAt | formatData }}</small>
      </div>
      <p class="post-content">{{ postItem.contents }}</p>
      <div class="icon-box">
        <i @click="routeEditPage" class="fa-solid fa-pen-to-square" />
        <i @click="deleteItem" class="fa-solid fa-trash-can" />
      </div>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      reqired: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style scoped>
.post-items {
  padding: 10px 0;
  display: inline-block;
  width: 45%;
}
.post-items:nth-child(2n) {
  margin-left: 10%;
}
.post-wrap {
  position: relative;
  height: 141px;
  padding: 10px 30px;
  box-shadow: 5px 4px 10px 3px rgba(72, 72, 72, 0.1);
}
.post-flex-box {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 30px;
}
.post-time {
  font-size: 10px;
  color: #333;
}
.post-content {
  font-size: 14px;
  font-weight: 200;
}
.icon-box {
  position: absolute;
  bottom: 5%;
  right: 3%;
}
.fa-solid {
  color: #ccc;
  margin-left: 20px;
  cursor: pointer;
}
.fa-solid:hover {
  color: #fe9616;
  transition: 0.4s ease-out;
}
</style>
