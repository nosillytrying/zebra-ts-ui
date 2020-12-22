import ZebraRadio from './index.vue'
import { App } from 'vue'
import '@/styles/form/radio/index.scss'
ZebraRadio.install = (app: App) => {
  app.component(ZebraRadio.name, ZebraRadio)
}
export default ZebraRadio
