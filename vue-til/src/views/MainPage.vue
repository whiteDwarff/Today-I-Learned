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
    <router-link to="/add" class="create-button">
      <i class="fa-solid fa-pen" />
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
      this.postItems = data.posts;
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
  position: absolute;
  bottom: 10%;
  right: 10%;
  padding: 1%;
  background-color: #fe9616;
  border-radius: 50%;
}
.fa-solid {
  font-size: 20px;
  color: #fff;
}
</style>
