<template>
  <div class='zebra-row' :style='computedStyle'>
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed, provide } from 'vue'
export default {
  name: 'zebra-row',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start',
      validator: function (value) {
        if (!['start', 'end', 'center', 'space-around', 'space-between'].includes(value)) {
          throw new Error(
            'row\'s justify is only: ' + ['start', 'end', 'center', 'space-around', 'space-between'].join('、')
          )
        }
        return true
      }
    },
    align: {
      type: String,
      default: 'top',
      validator: function (value) {
        if (!['top', 'middle', 'bottom'].includes(value)) {
          throw new Error(
            'row\'s align is only: ' + ['top', 'middle', 'bottom'].join('、')
          )
        }
        return true
      }
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup (props, context) {
    let rowStyle = {}
    const propGutter = ref(props.gutter)
    provide('gutter', propGutter)
    const computedStyle = computed(() => {
      propGutter.value = props.gutter || 0
      if (props.gutter) {
        rowStyle = {
          ...rowStyle,
          marginLeft: -props.gutter.value / 2 + 'px',
          marginRight: -props.gutter.value / 2 + 'px'
        }
      }
      if (props.justify) {
        rowStyle = {
          ...rowStyle,
          justifyContent: props.justify === 'start' || props.justify === 'end' ? `flex-${props.justify}` : props.justify
        }
      }
      return rowStyle
    })
    return {
      propGutter,
      computedStyle
    }
  }
}
</script>
