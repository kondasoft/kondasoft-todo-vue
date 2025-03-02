<template>
  <div v-if="projectsStore.projects === null" aria-label="Loading" class="placeholder-wave mb-6">
    <span v-for="n in 5" :key="n" class="placeholder"></span>
  </div>
  <p v-else-if="projectsStore.projects.length === 0" class="alert alert-primary">
    No projects yet!
  </p>
  <ul v-else class="nav flex-column mb-6">
    <router-link to="/" class="nav-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-grid me-5"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
        />
      </svg>
      All Projects</router-link
    >
    <hr class="my-5" />
    <li v-for="project in projectsStore.projects" :key="project.id" class="nav-item">
      <router-link :to="`/project/${project.id}`" class="nav-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-list-ul me-5"
          viewBox="0 0 16 16"
          aria-hidden="tru"
        >
          <path
            fill-rule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          />
        </svg>
        {{ project.title }}
        <em>
          {{ project.count_tasks ? project.count_tasks : '-' }}
        </em>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
hr {
  opacity: 0.1;
}

.nav {
  margin-left: -1rem;
  margin-right: -1rem;
}

.nav-item {
}

.nav-link {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.75rem 2.25rem 0.75rem 1.25rem;
  &.router-link-active {
    background-color: var(--bs-light);
    color: var(--bs-primary);
  }
  em {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1rem;
    opacity: 0.5;
    font-style: normal;
    font-size: 0.85em;
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
</style>

<script setup>
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
</script>
