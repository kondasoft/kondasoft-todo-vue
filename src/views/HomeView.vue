<template>
  <main class="py-8 py-desktop-10">
    <div class="container">
      <div
        v-if="projectsStore.projects === null"
        aria-label="Loading"
        class="placeholder-wave mb-6"
      >
        <div class="row row-cols-desktop-3 m-n4">
          <div v-for="n in 3" class="col p-4" :key="n">
            <span v-for="n in 3" :key="n" class="placeholder"></span>
          </div>
        </div>
      </div>
      <p
        v-else-if="projectsStore.projects.length === 0"
        class="alert alert-primary text-center mb-7"
      >
        No projects yet!
      </p>
      <div v-else class="row row-cols-1 row-cols-desktop-3 m-n4" aria-label="Projects" role="list">
        <div
          v-for="project in projectsStore.projects"
          :key="project.id"
          class="col p-4"
          role="listitem"
        >
          <div class="card">
            <h5 class="card-header text-truncate">{{ project.title }}</h5>
            <div class="card-body">
              <p class="card-text" v-if="project.tasks.length">
                {{ project.count_tasks }} tasks
                <span class="opacity-50"
                  >({{ project.tasks.filter((task) => task.starred).length }} starred)</span
                >
              </p>
              <p class="card-text" v-else>No tasks yet!</p>
              <div class="btn-group w-100">
                <router-link
                  :to="`/project/${project.id}`"
                  class="btn btn-outline-primary btn-sm w-100"
                  aria-label="View project"
                >
                  View project
                </router-link>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-split px-5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <button class="dropdown-item" data-btn-edit @click="editProject(project.id)">
                      Edit project
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <button
                      class="dropdown-item"
                      data-btn-delete
                      @click="deleteProject(project.id)"
                    >
                      Delete project
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.dropdown-menu {
  .dropdown-item {
    &[data-btn-delete] {
      color: var(--bs-danger);
      &:active {
        color: var(--bs-white);
        background: var(--bs-danger);
      }
    }
  }
}
</style>

<script setup>
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
</script>
