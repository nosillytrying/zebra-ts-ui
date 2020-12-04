import ZebraButton from './index.vue'
import '@/styles/basic/button/index.scss'
import { App } from 'vue'
ZebraButton.install = (app: App): void => {
  app.component(ZebraButton.name, ZebraButton)
}
export default ZebraButton
