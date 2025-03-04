import { ref } from 'vue'
import { defineStore } from 'pinia'
import short from 'short-uuid'
import { getFirestore, Timestamp, doc, updateDoc, deleteField } from 'firebase/firestore'
import { useProjectsStore } from './projects'
import { useRoute } from 'vue-router'

export const useTasksStore = defineStore('tasks', () => {
  const route = useRoute()
  const db = getFirestore()
  const tasks = ref(null)
  const projectsStore = useProjectsStore()

  function getTasks() {
    if (!route.params.projectId || !projectsStore.projects) {
      return
    }
    // console.log('get tasks!')
    const project = projectsStore.projects.find((project) => project.id === route.params.projectId)
    tasks.value = project.tasks.sort((a, b) => {
      if (a.starred && !b.starred) return -1
      if (!a.starred && b.starred) return 1
      return a.created_at - b.created_at
    })
  }

  async function addTask(title) {
    await updateDoc(doc(db, `projects/${route.params.projectId}`), {
      [`tasks.${short.generate()}`]: {
        title: title,
        created_at: Timestamp.now(),
      },
    })
  }

  async function commpleteTask(taskId, completed) {
    await updateDoc(doc(db, `/projects/${route.params.projectId}`), {
      [`tasks.${taskId}.completed`]: !completed,
    })
  }

  async function starTask(taskId, starred) {
    await updateDoc(doc(db, `/projects/${route.params.projectId}`), {
      [`tasks.${taskId}.starred`]: !starred,
    })
  }

  async function editTask(taskId, title) {
    await updateDoc(doc(db, `/projects/${route.params.projectId}`), {
      [`tasks.${taskId}.title`]: title,
    })
  }

  async function deleteTask(taskId) {
    await updateDoc(doc(db, `/projects/${route.params.projectId}`), {
      [`tasks.${taskId}`]: deleteField(),
    })
  }

  return { tasks, getTasks, addTask, commpleteTask, starTask, editTask, deleteTask }
})
