import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const userStore = useUserStore()

  function listenUser() {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        userStore.user = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        }
        console.log(userStore.user)
      } else {
        await signInAnonymously(auth)
      }
    })
  }

  return { user, listenUser }
})
