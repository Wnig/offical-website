import { createApp } from 'vue'
import "@/assets/scss/reset.scss"
import App from './App.vue'

import router from './router/router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

const app = createApp(App)
app.use(router)
app.use(VueAwesomeSwiper)

app.mount('#app')
