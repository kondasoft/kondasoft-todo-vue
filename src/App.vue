<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>

</style>

<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from './components/NavBar.vue'
</script>