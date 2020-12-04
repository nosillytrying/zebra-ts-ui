import ZebraButtonGroup from './index.vue'
import '@/styles/basic/button-group/index.scss'
import { App } from 'vue'
ZebraButtonGroup.install = (app: App): void => {
  app.component(ZebraButtonGroup.name, ZebraButtonGroup)
}
export default ZebraButtonGroup
