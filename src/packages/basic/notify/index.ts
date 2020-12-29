import ZebraNotify from './index.vue'
import '@/styles/basic/notify/index.scss'
import { App } from 'vue'

ZebraNotify.install = (app: App): void => {
  app.component(ZebraNotify.name, ZebraNotify)
}
export default ZebraNotify
