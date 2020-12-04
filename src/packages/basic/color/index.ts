import ZebraColor from './index.vue'
import '@/styles/basic/color/index.scss'
import { App } from 'vue'
ZebraColor.install = (app: App): void => {
  app.component(ZebraColor.name, ZebraColor)
}
export default ZebraColor
