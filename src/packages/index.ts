import { App } from 'vue'
import ZebraButton from './basic/button/index'
import ZebraButtonGroup from './basic/button-group/index'
import ZebraIcon from './basic/icon/index'
import ZebraCol from './basic/col/index'
import ZebraRow from './basic/row/index'
import ZebraColor from './basic/color/index'
import ZebraNotify from './basic/notify/index'
import ZebraRadio from './form/radio/index'
import ZebraRadioButton from './form/radio-button/index'
import ZebraRadioGroup from './form/radio-group/index'
const components = [
  ZebraButton,
  ZebraButtonGroup,
  ZebraIcon,
  ZebraCol,
  ZebraRow,
  ZebraColor,
  ZebraRadio,
  ZebraRadioButton,
  ZebraRadioGroup,
  ZebraNotify
]
export type ComponentSize = 'medium' | 'small' | 'mini'
export interface InstallOptions {
  size: ComponentSize;
  zIndex: number;
  local?: any;
}
let app: App
const install = (_app: App, options: InstallOptions) => {
  app = _app
  app.config.globalProperties.$ZEBRA = options
  components.forEach(item => app.component(item.name, item))
}
export default {
  install
}
export {
  install,
  ZebraButton,
  ZebraIcon,
  ZebraButtonGroup,
  ZebraCol,
  ZebraRow,
  ZebraColor,
  ZebraRadioGroup,
  ZebraRadioButton,
  ZebraRadio,
  ZebraNotify
}
