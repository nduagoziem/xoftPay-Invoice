import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)
app.use(PrimeVue,
    {
        theme: {
            preset: Aura
        }
    }
)
app.use(Toast)

app.mount('#app')