<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>

<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import Navbar from './components/layout/NavBar.vue'

const userStore = useUserStore()
userStore.listenUser()
</script>
