import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  signInAnonymously,
  onAuthStateChanged,
  EmailAuthProvider,
  linkWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/firebase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  function listenUser() {
    onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('onAuthStateChanged', firebaseUser)

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

  async function registerUser(email, password) {
    const credential = EmailAuthProvider.credential(email, password)

    try {
      const userCredential = await linkWithCredential(auth.currentUser, credential)
      user.value.email = userCredential.user.email
    } catch (error) {
      return error
    }
  }

  async function loginUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value.uid = userCredential.user.uid
      user.value.email = userCredential.user.email
    } catch (error) {
      return error
    }
  }

  async function logoutUser() {
    await auth.signOut()
    user.value = null
  }

  return { user, listenUser, registerUser, loginUser, logoutUser }
})
