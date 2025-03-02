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
        placeholder="Create project"
        aria-label="Create project"
      />
    </div>
  </form>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import { useRouter } from 'vue-router'

const projectsStore = useProjectsStore()
const router = useRouter()
const title = ref(null)

async function onSubmit() {
  if (!title.value) return

  const docRef = await projectsStore.createProject(title.value)
  title.value = null
  router.push(`/project/${docRef.id}`)
}
</script>
