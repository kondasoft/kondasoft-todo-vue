<template>
  <main class="py-8 py-desktop-10">
    <div class="container">
      <TaskList />
      <AddTask />
    </div>
  </main>
</template>

<style scoped></style>

<script setup>
import TaskList from '@/components/tasks/TaskList.vue'
import AddTask from '@/components/tasks/AddTask.vue'
</script>
