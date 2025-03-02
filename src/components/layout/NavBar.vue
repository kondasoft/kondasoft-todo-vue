<template>
  <nav class="navbar bg-primary text-white shadow border-bottom border-white">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <button
          class="nav-link p-4 d-flex me-4"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-sidebar"
          aria-label="Toggle sidebar"
        >
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

const route = useRoute()
const pageTitle = ref('TaskApp')

watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log('Route changed from', oldPath, 'to', newPath)
  },
)
</script>
