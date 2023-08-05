<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <ul class="post" v-else>
      <PostItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
      />
    </ul>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
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
</style>
