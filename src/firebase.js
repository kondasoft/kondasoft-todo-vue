import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAEofjuVbXsmj11GdK_M8x2ADjNgvtAyuA",
  authDomain: "task-app-79998.firebaseapp.com",
  projectId: "task-app-79998",
  storageBucket: "task-app-79998.firebasestorage.app",
  messagingSenderId: "657645614138",
  appId: "1:657645614138:web:c51801e90ee08856593103",
  measurementId: "G-GM6W7X0XWC"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export { auth, db, analytics }