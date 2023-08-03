<template>
  <header>
    <router-link to="/login" class="after">login</router-link>
    <router-link to="/signup">join</router-link>
  </header>
</template>

<style scoped>
.after::after {
  content: '|';
  display: inline-block;
  margin: 0 5px;
}
</style>
