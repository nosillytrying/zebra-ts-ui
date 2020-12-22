import { createApp } from 'vue'
import route from './router/index'
import App from './App.vue'
import ZebraUi from '../src/packages/index'
createApp(App).use(ZebraUi, {
  zIndex: 3000
}).use(route).mount('#app')
