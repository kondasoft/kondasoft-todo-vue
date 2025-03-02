import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  function listenUser() {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        user.value = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        }
      } else {
        await signInAnonymously(auth)
      }
    })
  }

  return { user, listenUser }
})
