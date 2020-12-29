/**
*   Notification 通知组件
*
**/
<template>
  <transition name="zebra-notify-fade">
    <div v-if="visible" class="zebra-notify">
      <!-- 左边的icon-->
      <zebra-icon v-if="type" :icon="type" fill="red"></zebra-icon>
      <!-- 中间内容部分-->
      <div>
        <h2 class="zebra-notification__title">{{title}}</h2>
        <div class="zebra-notification__content">
          <slot>
            <div v-if="dangerouslyUseHTMLString" v-html="message"></div>
            <div v-else>{{ message }}</div>
          </slot>
        </div>
      </div>
      <!-- 右边的关闭icon-->
      <span v-if="showClose" class="zebra-notification__closeBtn">×</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'
import { NotificationVM } from './notification.type'
export default defineComponent({
  name: 'zebra-notify',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    title: {
      type: String,
      default: '提示'
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
    }
  },
  setup (props, ctx) {
    const visible = ref(true)
    return {
      visible
    }
  }
})
</script>
