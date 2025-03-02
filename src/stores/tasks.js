import { ref } from 'vue'
import { defineStore } from 'pinia'
import short from 'short-uuid'
import { getFirestore, Timestamp, doc, updateDoc } from 'firebase/firestore'
import { useProjectsStore } from './projects'
import { useRoute } from 'vue-router'

export const useTasksStore = defineStore('tasks', () => {
  const route = useRoute()
  const db = getFirestore()
  const tasks = ref(null)
  const projectsStore = useProjectsStore()

  function getTasks() {
    if (!route.params.projectId) {
      return
    }
    const project = projectsStore.projects.find((project) => project.id === route.params.projectId)
    tasks.value = project.tasks.sort((a, b) => a.created_at - b.created_at)
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

  return { tasks, getTasks, addTask, commpleteTask }
})
