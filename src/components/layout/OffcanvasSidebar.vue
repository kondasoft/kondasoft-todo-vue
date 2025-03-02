<template>
  <div
    id="offcanvas-sidebar"
    class="offcanvas offcanvas-start"
    tabindex="-1"
    aria-labelledby="offcanvas-sidebar-label"
  >
    <div class="offcanvas-header bg-light d-desktop-none">
      <h2 id="offcanvas-sidebar-label" class="offcanvas-title h3">Projects</h2>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ProjectList />
      <CreateProject />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.offcanvas {
  --bs-offcanvas-width: 360px;
  --bs-offcanvas-border-color: var(--bs-border-color);
}
@media (min-width: 1200px) {
  .offcanvas {
    visibility: visible;
  }
  [sidebar-open] .offcanvas {
    transform: none;
  }
}
</style>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { Offcanvas } from 'bootstrap'
import CreateProject from '../projects/CreateProject.vue'
import ProjectList from '../projects/ProjectList.vue'

const route = useRoute()

watch(
  () => route.path,
  () => {
    const offcanvas = Offcanvas.getOrCreateInstance('#offcanvas-sidebar')
    setTimeout(() => {
      offcanvas.hide()
    }, 200)
  },
)
</script>
