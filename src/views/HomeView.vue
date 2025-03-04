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
              <p class="card-text" v-if="project.tasks.length">{{ project.count_tasks }} tasks</p>
              <p class="card-text opacity-50" v-else>No tasks yet!</p>
              <router-link
                :to="`/project/${project.id}`"
                class="btn btn-outline-primary btn-sm w-100"
                aria-label="View project"
              >
                View tasks
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

<script setup>
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
</script>
