import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/token/router/router.js'

createApp(App).use(router).mount('#app')
