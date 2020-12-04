import ZebraRow from './index.vue'
import '@/styles/basic/row/index.scss'
import { App } from 'vue'
ZebraRow.install = (app: App): void => {
  app.component(ZebraRow.name, ZebraRow)
}
export default ZebraRow
