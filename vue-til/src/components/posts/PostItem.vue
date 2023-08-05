<template>
  <li class="post-items">
    <div class="post-wrap">
      <div class="post-flex-box">
        <h6 class="post-title">❗️ {{ postItem.title }}</h6>
        <small class="post-time">{{ postItem.createdAt }}</small>
      </div>
      <p class="post-content">🔗 {{ postItem.contents }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      reqired: true,
    },
  },
};
</script>

<style scoped>
.post-items {
  padding: 10px 0;
  display: inline-block;
  width: 45%;
  font-size: 0;
}
.post-items:nth-child(2n) {
  margin-left: 10%;
}
.post-wrap {
  padding: 10px 30px;
  box-shadow: 5px 4px 5px 3px rgba(72, 72, 72, 0.1);
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
</style>
