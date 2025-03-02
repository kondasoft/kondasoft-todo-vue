<template>
  <Navbar />
  <RouterView />
  <OffcanvasSidebar />
</template>

<style scoped></style>

<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import Navbar from './components/layout/NavBar.vue'
import OffcanvasSidebar from './components/layout/OffcanvasSidebar.vue'

const userStore = useUserStore()
userStore.listenUser()
</script>
