import { App } from 'vue'
import ZebraRadioButton from './index.vue'
import '@/styles/form/radio-button/index.scss'
ZebraRadioButton.install = (app: App) => {
  app.component(ZebraRadioButton.name, ZebraRadioButton)
}
export default ZebraRadioButton
