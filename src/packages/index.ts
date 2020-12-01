import { App } from 'vue'
import ZebraButton from './basic/button/index'

let app: App
const install = (_app: App) => {
  app = _app
  app.component(ZebraButton.name, ZebraButton)
}
export {
  install
}
