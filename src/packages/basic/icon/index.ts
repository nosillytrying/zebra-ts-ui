import ZebraIcon from './index.vue'
import '@/styles/basic/icon/index.scss'
import { App } from 'vue'
ZebraIcon.install = (app: App): void => {
  app.component(ZebraIcon.name, ZebraIcon)
}
export default ZebraIcon
