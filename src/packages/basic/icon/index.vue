<template>
  <div>
    <svg class="zebra-icon" :style='computedStyle' aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import '@/styles/basic/icon/icon.js'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'zebra-icon',
  props: {
    icon: {
      type: String,
      require: true
    },
    fill: {
      type: String
      // default: '#fff'
    }
  },
  setup (props, context) {
    const computedStyle = computed(() => {
      const style = Object.create(null)
      if (props.fill) {
        style.fill = props.fill
      }
      return style
    })
    return {
      computedStyle
    }
  }
})
</script>
