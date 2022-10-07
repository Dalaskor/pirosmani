import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/styles/fonts.scss'
import '../src/assets/styles/normalize.scss'

createApp(App).use(store).use(router).mount('#app')
