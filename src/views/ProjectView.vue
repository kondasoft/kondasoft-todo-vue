<template>
  <main class="py-10">
    <div class="container">
      <Tasklist />
      <AddTask />
    </div>
  </main>
</template>

<style scoped></style>

<script setup>
import AddTask from '@/components/tasks/AddTask.vue'
import Tasklist from '@/components/tasks/Tasklist.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
