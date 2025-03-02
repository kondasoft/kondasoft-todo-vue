import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import {
  getFirestore,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'

import { useUserStore } from './user'

export const useProjectsStore = defineStore('projects', () => {
  const userStore = useUserStore()
  const db = getFirestore()
  const projects = ref(null)

  watch(
    () => userStore.user,
    (newValue) => {
      if (newValue) {
        listenProjects()
      }
    },
  )

  function listenProjects() {
    console.log('Listen projects for user uid:', userStore.user.uid)

    onSnapshot(
      query(collection(db, 'projects'), where('users', 'array-contains', userStore.user.uid)),
      (querySnapshot) => {
        projects.value = querySnapshot.docs.reduce((acc, doc) => {
          acc.push({
            id: doc.id,
            ...doc.data(),
          })
          return acc
        }, [])
        projects.value.map((project) => {
          if (!project.tasks) {
            project.tasks = []
          } else {
            project.tasks = Object.entries(project.tasks).map(([key, value]) => ({
              id: key,
              ...value,
            }))
          }
          project.count_tasks = project.tasks.filter((task) => !task.completed).length
          return project
        })
        projects.value = projects.value.sort((a, b) => a.created_at - b.created_at)
        console.log('Projects updated:', projects.value)
      },
    )
  }

  async function createProject(title) {
    const docRef = await addDoc(collection(db, 'projects'), {
      title: title,
      created_at: Timestamp.now(),
      users: [userStore.user.uid],
    })
    return docRef
  }

  return { projects, listenProjects, createProject }
})
