<template>
  <div v-if="tasksStore.tasks === null" aria-label="Loading" class="placeholder-wave mb-6">
    <span v-for="n in 5" :key="n" class="placeholder"></span>
  </div>
  <p v-else-if="tasksStore.tasks.length === 0" class="alert alert-primary text-center">
    No tasks yet!
  </p>
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
</template>

<style lang="scss" scoped>
.form-check-input {
  margin-right: 0.75rem;
}

.form-check-input:checked + label {
  opacity: 0.5;
  text-decoration: line-through;
}

.placeholder {
  background-color: rgba(var(--bs-dark-rgb), 0.1);
  border-radius: var(--bs-border-radius);
  width: 100%;
  height: 1.5rem;
  opacity: 1;
  margin: 0.5rem 0;
}
</style>

<script setup>
import { watch } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import { useTasksStore } from '@/stores/tasks'
import { useRoute } from 'vue-router'

const projectsStore = useProjectsStore()
const tasksStore = useTasksStore()
const route = useRoute()

watch(
  () => projectsStore.projects,
  (newValue) => {
    if (newValue) {
      tasksStore.getTasks()
    }
  },
)

watch(
  () => route.path,
  () => {
    tasksStore.getTasks()
  },
)
</script>
