<template>
  <div class='zebra-col' :class='computedClass' :style='computedStyle'>
    <slot></slot>
  </div>
</template>
<script>
import { computed, inject } from 'vue'
export default {
  name: 'zebra-col',
  inheritAttrs: false,
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup (props, context) {
    const computedClass = computed(() => {
      const ret = []
      ret.push(`zebra-col-${props.span}`)
      if (props.offset) {
        ret.push(`zebra-col-offset-${props.span}`)
      }
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((type) => {
        if (typeof props[type] === 'object') {
          props[type].span && ret.push(`zebra-col-${type}-${props[type].span}`)
          props[type].offset &&
            ret.push(`zebra-col-${type}-offset-${props[type]}`)
        } else {
          props[type] && ret.push(`zebra-col-${type}-${props[type]}`)
        }
      })
      return ret
    })
    const computedStyle = computed(() => {
      let colStyle = {}
      const getter = inject('gutter')
      if (getter) {
        colStyle = {
          ...colStyle,
          paddingLeft: getter.value / 2 + 'px',
          paddingRight: getter.value / 2 + 'px'
        }
      }
      return colStyle
    })
    return {
      computedClass,
      computedStyle
    }
  }
}
</script>
