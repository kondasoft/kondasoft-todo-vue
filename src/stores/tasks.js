import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getFirestore,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  query,
  doc,
  updateDoc,
} from 'firebase/firestore'

import { useUserStore } from './user'

export const useTasksStore = defineStore('tasks', () => {
  const userStore = useUserStore()
  const db = getFirestore()
  const test = ref('test')
  const tasks = ref(null)

  function listenTasks() {
    onSnapshot(query(collection(db, 'tasks')), (querySnapshot) => {
      tasks.value = querySnapshot.docs.reduce((acc, doc) => {
        const data = doc.data()
        acc.push({
          id: doc.id,
          title: data.title,
          completed: data.completed,
          created_at: data.created_at,
          users: data.users,
        })
        return acc
      }, [])
      tasks.value = tasks.value.sort((a, b) => a.created_at - b.created_at)
    })
  }

  async function createTask(title) {
    await addDoc(collection(db, 'tasks'), {
      title: title,
      created_at: Timestamp.now(),
      users: [userStore.user.uid],
    })
  }

  async function commpleteTask(taskId, completed) {
    const taskRef = doc(db, 'tasks', taskId)
    updateDoc(taskRef, {
      completed: !completed,
    })
  }

  return { tasks, test, listenTasks, createTask, commpleteTask }
})
