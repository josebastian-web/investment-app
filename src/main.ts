import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import App from './App.vue'

import '@vuikit/theme'

const app = createApp(App)

app.use(Vuikit)
app.use(VuikitIcons)

app.use(createPinia())

app.mount('#app')
