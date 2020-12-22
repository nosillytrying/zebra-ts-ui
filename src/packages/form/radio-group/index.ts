import ZebraRadioGroup from './index.vue'
import { App } from 'vue'
// import '@/styles/form/radio/index.scss'
ZebraRadioGroup.install = (app: App) => {
  app.component(ZebraRadioGroup.name, ZebraRadioGroup)
}
export default ZebraRadioGroup
