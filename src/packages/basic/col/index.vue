<template>
  <div class='zebra-col' :class='computedClass' :style='computedStyle'>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { computed, inject, defineComponent, PropType } from 'vue'
export default defineComponent({
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
    xs: [Number, Object] as PropType<number | { span: number; offset: number }>,
    sm: [Number, Object] as PropType<number | { span: number; offset: number }>,
    md: [Number, Object] as PropType<number | { span: number; offset: number }>,
    lg: [Number, Object] as PropType<number | { span: number; offset: number }>,
    xl: [Number, Object] as PropType<number | { span: number; offset: number }>
  },
  setup (props) {
    const computedClass = computed(() => {
      const ret = []
      ret.push(`zebra-col-${props.span}`)
      if (props.offset) {
        ret.push(`zebra-col-offset-${props.span}`)
      }
      (['xs', 'sm', 'md', 'lg', 'xl'] as ['xs', 'sm', 'md', 'lg', 'xl']).forEach((type) => {
        const propVal = props[type]
        if (propVal !== undefined) {
          if (typeof propVal === 'number') {
            propVal && ret.push(`zebra-col-${type}-${propVal}`)
          } else {
            propVal.span && ret.push(`zebra-col-${type}-${propVal.span}`)
            propVal.offset &&
            ret.push(`zebra-col-${type}-offset-${propVal.offset}`)
          }
        }
      })
      return ret
    })
    const computedStyle = computed(() => {
      let colStyle = {}
      const getter = inject<number>('gutter')
      if (getter) {
        colStyle = {
          ...colStyle,
          paddingLeft: getter / 2 + 'px',
          paddingRight: getter / 2 + 'px'
        }
      }
      return colStyle
    })
    return {
      computedClass,
      computedStyle
    }
  }
})
</script>
