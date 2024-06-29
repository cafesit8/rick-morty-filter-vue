import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app
.use(pinia)
.use(PrimeVue, { theme: { preset: Aura } })
.mount('#app')
