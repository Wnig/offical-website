import { createApp } from 'vue'
import "@/assets/scss/reset.scss"
import '@/assets/scss/style.scss'
import App from './App.vue'

import router from './router/router'

const app = createApp(App)
app.use(router)

app.mount('#app')
