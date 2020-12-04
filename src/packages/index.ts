import { App } from 'vue'
import ZebraButton from './basic/button/index'
import ZebraButtonGroup from './basic/button-group/index'
import ZebraIcon from './basic/icon/index'
import ZebraCol from './basic/col/index'
import ZebraRow from './basic/row/index'
import ZebraColor from './basic/color/index'
let app: App
const install = (_app: App) => {
  app = _app
  app.component(ZebraButton.name, ZebraButton)
  app.component(ZebraIcon.name, ZebraIcon)
  app.component(ZebraButtonGroup.name, ZebraButtonGroup)
  app.component(ZebraCol.name, ZebraCol)
  app.component(ZebraRow.name, ZebraRow)
  app.component(ZebraColor.name, ZebraColor)
}
export default {
  install
}
export {
  ZebraButton,
  ZebraIcon,
  ZebraButtonGroup,
  ZebraCol,
  ZebraRow,
  ZebraColor
}
