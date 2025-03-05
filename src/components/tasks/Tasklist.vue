<template>
  <div v-if="tasksStore.tasks === null" aria-label="Loading" class="placeholder-wave mb-6">
    <span v-for="n in 5" :key="n" class="placeholder"></span>
  </div>
  <p v-else-if="tasksStore.tasks.length === 0" class="alert alert-primary text-center mb-7">
    No tasks yet!
  </p>
  <ul v-else class="list-group mb-6">
    <li
      v-for="task in tasksStore.tasks"
      :key="task.id"
      class="list-group-item"
      :data-completed="task.completed ? 'true' : 'false'"
      :data-starred="task.starred ? 'true' : 'false'"
    >
      <input
        :id="`checkbox-${task.id}`"
        class="form-check-input"
        type="checkbox"
        value=""
        :checked="task.completed"
        @change="commpleteTask(task.id, task.completed)"
      />
      <span
        class="form-check-title"
        :for="`checkbox-${task.id}`"
        contenteditable="plaintext-only"
        @keydown.enter.prevent="editTask(task.id, $event)"
        >{{ task.title }}</span
      >
      <button
        v-if="task.completed"
        class="btn btn-danger btn-sm btn-side"
        @click="deleteTask(task.id)"
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
      <button
        v-else
        class="btn btn-primary btn-sm btn-side"
        @click="tasksStore.starTask(task.id, task.starred)"
        :data-starred="task.starred ? 'true' : 'false'"
        aria-label="Star task"
      >
        <svg
          v-if="task.starred"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list-group-item {
  --color-starred: 225, 113, 0;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  .form-check-input {
    margin: 0 0.5rem;
    cursor: pointer;
    border-color: rgba(var(--bs-primary-rgb), 0.25);
    & + .form-check-title {
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      width: calc(100% - 4.25rem);
      border: 1px solid transparent;
      cursor: text;
      &:hover {
        border-color: var(--bs-border-color);
      }
    }
    &:checked + .form-check-title {
      opacity: 0.5;
      text-decoration: line-through;
    }
  }
  &[data-starred='true'] {
    border-left-width: 2px;
    border-left-color: rgba(var(--color-starred), 1);
    .form-check-input {
      border-color: rgba(var(--color-starred), 1);
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(var(--color-starred), 0.25);
      }
      &:checked {
        background-color: rgba(var(--color-starred), 1);
      }
    }
    .form-check-title {
    }
  }
}

.btn-side {
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: transparent;
  border: none;
  opacity: 1;
  display: flex;
  padding: 0.6rem;
  border-radius: 50rem;
  transition: all 0.2s ease-out;
  &.btn-primary {
    color: var(--bs-primary);
    &:hover,
    &:focus,
    &:focus-visible {
      background-color: rgba(var(--bs-primary-rgb), 0.1);
      color: var(--bs-primary);
    }
  }
  &.btn-danger {
    color: var(--bs-danger);
    &:hover,
    &:focus,
    &:focus-visible {
      background-color: rgba(var(--bs-danger-rgb), 0.1);
      color: var(--bs-danger);
    }
  }
  &[data-starred='false'] svg {
    opacity: 0.5;
  }
  &[data-starred='true'] svg {
    fill: rgba(var(--color-starred), 1);
  }
}

[data-bs-theme='dark'] {
  .form-check-input {
    background-color: rgba(var(--bs-black-rgb), 0.1);
    border-color: rgba(var(--bs-white-rgb), 0.2);
    &:checked {
      background-color: rgba(var(--bs-white-rgb), 0.1);
    }
  }
}
</style>

<script setup>
import { onMounted, watch } from 'vue'
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

onMounted(() => {
  tasksStore.getTasks()
})

async function commpleteTask(taskId, completed) {
  // console.log('Complete task:', taskId)
  if (!completed) {
    const audio = new Audio('/sounds/bell-172780.mp3')
    audio.play()
  }
  await tasksStore.commpleteTask(taskId, completed)
}

async function editTask(taskId, event) {
  // console.log('Edit task:', taskId)
  const title = event.target.innerText.trim()
  if (!title.length) return

  await tasksStore.editTask(taskId, title)
  event.target.blur()
}

async function deleteTask(taskId) {
  // console.log('Delete task:', taskId)
  tasksStore.deleteTask(taskId)
}
</script>
