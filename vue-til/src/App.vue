<template>
  <div id="app">
    <span>hello</span>
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 16px;
  list-style: none;
  text-decoration: none;
}
</style>
