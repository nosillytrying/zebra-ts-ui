import ZebraCol from './index.vue'
import '@/styles/basic/col/index.scss'
import { App } from 'vue'
ZebraCol.install = (app: App): void => {
  app.component(ZebraCol.name, ZebraCol)
}
export default ZebraCol
