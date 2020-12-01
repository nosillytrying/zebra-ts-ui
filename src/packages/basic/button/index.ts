import ZebraButton from './index.vue'
import { App } from 'vue'
ZebraButton.install = (app: App): void => {
  app.component(ZebraButton.name, ZebraButton)
}
export default ZebraButton
