/**
*   Notification 通知组件
*
**/
<template>
  <transition name="zebra-notify-fade">
    <div v-if="visible" ref="rootRef" class="zebra-notify" :class="[horizontalClass]" :style="positionStyle"
         @click="click">
      <!-- 左边的icon-->
      <zebra-icon v-if="type" :icon="type" fill="red"></zebra-icon>
      <!-- 中间内容部分-->
      <div>
        <h2 class="zebra-notification__title">{{ title }}</h2>
        <div class="zebra-notification__content">
          <slot>
            <div v-if="dangerouslyUseHTMLString" v-html="message"></div>
            <div v-else>{{ message }}</div>
          </slot>
        </div>
      </div>
      <!-- 右边的关闭icon-->
      <span v-if="showClose" class="zebra-notification__closeBtn" @click.stop="close">×</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, computed, onMounted, onUnmounted } from 'vue'
import { NotificationVM, positionEnum } from './notification.type'
import { on, off } from '@/utils/util'
import { EVENT_CODE } from '@/utils/aria'

export default defineComponent({
  name: 'zebra-notify',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    position: {
      type: String as PropType<positionEnum>,
      default: 'top-right'
    },
    title: {
      type: String,
      default: '提示'
    },
    offset: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 4500
    },
    showClose: {
      type: Boolean,
      default: true
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    message: {
      type: [String, Object] as PropType<string | NotificationVM>,
      default: ''
    },
    onClose: {
      type: Function as PropType<() => void>,
      // eslint-disable-next-line no-void
      default: () => void 0
    },
    onClick: {
      type: Function as PropType<() => void>,
      // eslint-disable-next-line no-void
      default: () => void 0
    }
  },
  emits: ['close', 'click'],
  setup (props, ctx) {
    const horizontalClass = computed(() => {
      return props.position.indexOf('right') > -1 ? 'right' : 'left'
    })
    const verticalProperty = computed(() => {
      return props.position.startsWith('top') ? 'top' : 'bottom'
    })
    const positionStyle = computed(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`
      }
    })
    const visible = ref(false)
    const timer = ref(0)
    const rootRef = ref()
    const destroyElement = (): void => {
      off(rootRef.value, 'transitionend', destroyElement)
      props.onClose && props.onClose()
    }
    const close = (): void => {
      on(rootRef.value, 'transitionend', destroyElement)
      visible.value = false
      timer.value = 0
    }
    const startTimer = (): void => {
      // 大于0才会自动关闭notify弹窗
      if (props.duration > 0) {
        timer.value = setTimeout(() => {
          close()
        }, props.duration)
      }
    }
    const clearTimer = (): void => {
      clearTimeout(timer.value)
      timer.value = 0
    }
    const keydown = ({ code }: KeyboardEvent): void => {
      if ([EVENT_CODE.delete, EVENT_CODE.backspace].includes(code)) {
        clearTimer()
      } else if (code === EVENT_CODE.esc) {
        close()
      } else {
        startTimer()
      }
    }
    onMounted(() => {
      visible.value = true
      // 大于0才会自动关闭notify弹窗
      if (props.duration > 0) {
        timer.value = setTimeout(() => {
          close()
        }, props.duration)
      }
      on(document, 'keydown', keydown as EventListenerOrEventListenerObject)
    })
    onUnmounted(() => {
      off(document, 'keydown', keydown as EventListenerOrEventListenerObject)
    })
    const click = () => {
      props.onClick()
    }
    return {
      click,
      close,
      timer,
      rootRef,
      visible,
      positionStyle,
      horizontalClass
    }
  }
})
</script>
