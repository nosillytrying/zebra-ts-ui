import { createVNode, render, nextTick, isVNode } from 'vue'
import { isServer } from '@/utils/util'
import NotificationConstructor from './index.vue'
import {
  NotificationVM,
  NotificationQueue,
  TNotification,
  TNotificationOptions,
  TNotificationHandle
} from '@/packages/basic/notify/notification.type'

let vm: NotificationVM
// 通知队列
const notifications: NotificationQueue = []
let seed = 1
let zIndex = 2020
// 默认偏移量
const defaultOffset = 16

export function close (id: string, userOnClose?: (vm: NotificationVM) => void): void {
  const idx = notifications.findIndex(({ vm }) => {
    const _id = vm.component?.props.id
    return _id === id
  })
  if (idx === -1) return
  const { vm, $el } = notifications[idx]
  if (!vm) return
  userOnClose && userOnClose(vm)

  const removedHeight = $el.offsetHeight
  render(null, $el)
  notifications.splice(idx, 1)
  nextTick(() => {
    document.removeChild($el)
  })
  const len = notifications.length
  if (len < 1) return
  const position = vm!.props!.position
  for (let i = idx; i < len; i++) {
    // 找出同一个方向上的元素
    if (notifications[i]!.vm!.component!.props.position === position) {
      const verticalPos = vm!.props!.position.split('-')[0]
      const pos = parseInt(notifications[i]!.vm!.el!.style[verticalPos], 10) - removedHeight - defaultOffset
      notifications[i]!.vm!.component!.props.offset = pos
      requestAnimationFrame(() => {
        render(notifications[i]!.vm, notifications[i]!.$el)
      })
    }
  }
}

const Notification: TNotification = function (options: TNotificationOptions = {} as TNotificationOptions) {
  if (isServer()) {
    return
  }
  const position = options.position || 'top-right'
  let verticalOffset = options.offset || 0
  notifications.filter((item) => item!.vm!.component!.props.position === position).forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + defaultOffset
  })
  verticalOffset += defaultOffset
  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options = {
    dangerouslyUseHTMLString: false,
    duration: 4500,
    position: 'top-right',
    showClose: true,
    // 默认值的结束
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
    offset: verticalOffset,
    id,
    zIndex: zIndex++
  }
  const container = document.createElement('div')
  container.className = `container_${id}`
  container.style.zIndex = ''
  vm = createVNode(
    NotificationConstructor,
    options,
    isVNode(options?.message) ? {
      default: () => options.message
    } : null
  )
  render(vm, container)
  notifications.push({ vm, $el: container })
  document.body.appendChild(container)
  return {
    close: options?.onClose
  } as TNotificationHandle
}

export function closeAll (): void {
  const length = notifications.length
  for (let i = length - 1; i >= 0; i--) {
    (notifications[i]!.vm!.component!.props as any).onClose()
  }
}

export default Notification
