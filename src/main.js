import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Dropdown } from 'bootstrap'
import App from './App.vue'
import router from './router'
import './firebase'
import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$bootstrap = {
  Dropdown,
}

app.mount('#app')
