<template>
  <main class="py-10">
    <div class="container">
      <h1 class="mb-5">Project title</h1>
      <p v-if="tasksStore.tasks === null" class="">Loading...</p>
      <p v-else-if="tasksStore.tasks.length === 0" class="alert alert-primary">No tasks yet</p>
      <ul v-else class="list-group mb-6">
        <li v-for="task in tasksStore.tasks" :key="task.id" class="list-group-item">
          <input
            :id="`checkbox-${task.id}`"
            class="form-check-input"
            type="checkbox"
            value=""
            :checked="task.completed"
            @change="tasksStore.commpleteTask(task.id, task.completed)"
          />
          <label class="form-check-label stretched-link" :for="`checkbox-${task.id}`">{{
            task.title
          }}</label>
        </li>
      </ul>
      <CreateTask />
    </div>
  </main>
</template>

<style scoped>
.form-check-input {
  margin-right: 0.75rem;
}
.form-check-input:checked + label {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>

<script setup>
import { ref } from 'vue'
import CreateTask from '@/components/tasks/CreateTask.vue'
import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()

tasksStore.listenTasks()
</script>
