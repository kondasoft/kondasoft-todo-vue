<template>
  <nav class="navbar bg-primary text-white shadow border-bottom border-white">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <button @click="toggleSidebar" class="nav-link p-4 d-flex me-5" aria-label="Toggle sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <h1 class="navbar-brand">
          {{ pageTitle }}
        </h1>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  --bs-navbar-brand-color: rgba(var(--bs-white-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-white-rgb), 1);
  .navbar-brand {
    margin: 0;
  }
}
</style>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Offcanvas } from 'bootstrap'
import { useProjectsStore } from '@/stores/projects'

const route = useRoute()
const projectsStore = useProjectsStore()
const pageTitle = ref('Loading...')

watch(
  () => route.path,
  () => {
    setPageTitle()
  },
)

watch(
  () => projectsStore.projects,
  () => {
    setPageTitle()
  },
)

function setPageTitle() {
  if (!projectsStore.projects) return

  if (route.params.projectId) {
    const project = projectsStore.projects.find((project) => project.id === route.params.projectId)
    pageTitle.value = project.title
  } else {
    pageTitle.value = 'TaskApp'
  }
}

function toggleSidebar() {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    const app = document.querySelector('#app')
    app.toggleAttribute('sidebar-open')
  } else {
    const offcanvas = Offcanvas.getOrCreateInstance('#offcanvas-sidebar')
    offcanvas.toggle()
  }
}
</script>
