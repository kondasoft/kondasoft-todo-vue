<template>
  <div v-if="tasksStore.tasks === null" aria-label="Loading" class="placeholder-wave mb-6">
    <span v-for="n in 5" :key="n" class="placeholder"></span>
  </div>
  <p v-else-if="tasksStore.tasks.length === 0" class="alert alert-primary text-center mb-7">
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
      <button
        v-if="task.completed"
        class="btn btn-danger btn-sm"
        @click="tasksStore.deleteTask(task.id)"
        aria-label="Delete task"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash3"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.form-check-input {
  margin-right: 0.75rem;
  & + label {
    cursor: pointer;
    width: calc(100% - 3.5rem);
  }
  &:checked + label {
    opacity: 0.5;
    text-decoration: line-through;
  }
}

.btn-danger {
  position: absolute;
  right: 0.125rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: transparent;
  color: var(--bs-danger);
  border: none;
  opacity: 1;
  display: flex;
  padding: 0.6rem;
  border-radius: 50rem;
  &:hover {
    background-color: rgba(var(--bs-danger-rgb), 0.1);
    color: var(--bs-danger);
  }
}

.placeholder {
  background-color: rgba(var(--bs-dark-rgb), 0.1);
  border-radius: var(--bs-border-radius);
  width: 100%;
  height: 1.5rem;
  opacity: 1;
  margin: 0.5rem 0;
}

[data-bs-theme='dark'] {
  .form-check-input {
    background-color: rgba(var(--bs-black-rgb), 0.1);
    border-color: rgba(var(--bs-white-rgb), 0.2);
    &:checked {
      background-color: rgba(var(--bs-white-rgb), 0.1);
    }
  }
  .placeholder {
    background-color: rgba(var(--bs-white-rgb), 0.05);
  }
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
