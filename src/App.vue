<template>
  <div id="app-inner">
    <Navbar />
    <RouterView />
  </div>
  <OffcanvasSidebar />
  <UserModal />
</template>

<style lang="scss">
@media (min-width: 1200px) {
  #app-inner {
    transition: all 0.3s ease-in-out;
  }
  #app[sidebar-open] #app-inner {
    margin-left: 360px;
  }
}
@media (max-width: 1199px) {
  .container {
    max-width: 800px;
  }
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import Navbar from './components/layout/NavBar.vue'
import OffcanvasSidebar from './components/layout/OffcanvasSidebar.vue'
import UserModal from '@/components/user/UserModal.vue'

const userStore = useUserStore()
userStore.listenUser()
</script>
