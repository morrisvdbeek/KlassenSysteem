import './assets/css/main.css'

import { createApp } from 'vue'
import App from '@/app/main/views/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')