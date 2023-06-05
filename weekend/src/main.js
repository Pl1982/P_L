import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
import { setupCalendar } from 'v-calendar';

// Use calendar defaults (optional)
app.use(setupCalendar, {})
import 'v-calendar/style.css';
