<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <ul class="post" v-else>
      <PostItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
        @refresh="fetchData"
      />
    </ul>
    <div v-if="!postItems.length && !isLoading" class="guide">
      <span>등록된 게시물이 없습니다.</span>
    </div>
    <router-link to="/add">
      <i class="fa-solid fa-pen create-button" />
    </router-link>
    <router-link to=""></router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostItem from '@/components/posts/PostItem';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.postItems = data.posts.reverse();
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },
  created() {
    this.fetchData();
  },
  components: {
    PostItem,
    LoadingSpinner,
  },
};
</script>

<style>
.post {
  width: 80%;
  margin: 0 auto;
}
.create-button {
  position: fixed;
  bottom: 10%;
  right: 5%;
  padding: 1%;
  background-color: #fe9616;
  border-radius: 50%;
}
.fa-solid {
  font-size: 20px;
  color: #fff;
}
.guide {
  text-align: center;
  margin: auto 0;
}
.guide span {
  font-size: 14px;
  color: grey;
}
</style>
