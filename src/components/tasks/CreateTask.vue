<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group mb-3">
      <span class="input-group-text px-4" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
          />
        </svg>
      </span>
      <input
        v-model="title"
        type="text"
        class="form-control py-4"
        placeholder="Add task"
        aria-label="Add task"
      />
    </div>
  </form>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()
const title = ref(null)

async function onSubmit() {
  if (!title.value) return

  await tasksStore.createTask(title.value)
  title.value = null
}
</script>
