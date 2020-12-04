import { createApp } from 'vue'
import route from './router/index'
import App from './App.vue'
import ZebraUi from '../src/packages/index'
createApp(App).use(ZebraUi).use(route).mount('#app')
