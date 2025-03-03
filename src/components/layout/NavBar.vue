<template>
  <nav class="navbar bg-primary text-white shadow">
    <div class="container-fluid w-100">
      <div class="d-flex align-items-center justify-content-between w-100">
        <div class="d-flex align-items-center overflow-hidden">
          <button @click="toggleSidebar" class="nav-link me-5" aria-label="Toggle sidebar">
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
          <h1 class="navbar-brand text-truncate">
            {{ pageTitle }}
          </h1>
        </div>
        <div class="d-flex align-items-center">
          <button @click="toggleTheme" class="nav-link mx-2" aria-label="Chagen theme">
            <svg
              v-if="theme === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-brightness-high"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
              />
            </svg>
          </button>
          <button
            class="nav-link mx-2"
            data-bs-toggle="modal"
            data-bs-target="#user-modal"
            aria-label="Register or login"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  --bs-navbar-brand-color: rgba(var(--bs-white-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-white-rgb), 1);
  border-bottom: 1px solid rgba(var(--bs-white-rgb), 0.1);
  .navbar-brand {
    margin: 0;
  }
  button.nav-link {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50rem;
    &:hover {
      background-color: rgba(var(--bs-white-rgb), 0.1);
    }
  }
}
</style>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Offcanvas } from 'bootstrap'
import { useProjectsStore } from '@/stores/projects'

const route = useRoute()
const projectsStore = useProjectsStore()
const pageTitle = ref('Loading...')
const theme = ref('light')

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

onMounted(() => {
  theme.value = window.localStorage.getItem('bs-theme') || 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

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

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  window.localStorage.setItem('bs-theme', theme.value)
}
</script>
