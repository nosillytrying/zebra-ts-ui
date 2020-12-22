<template>
  <div class='zebra-radio-group'>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { UPDATE_MODEL_EVENT } from '@/utils/constant'
import { defineComponent, PropType, provide, inject, reactive, nextTick, toRefs } from 'vue'
import { zebraRadioGroupSize, sizeList, zebraRadioGroupKey, zebraModelType } from './types'
export default defineComponent({
  name: 'zebra-radio-group',
  emits: [UPDATE_MODEL_EVENT, 'change'],
  props: {
    modelValue: {
      type: [Boolean, String, Number]
    },
    size: {
      type: String as PropType<zebraRadioGroupSize>,
      validator (size: zebraRadioGroupSize): boolean {
        if (!sizeList.includes(size)) {
          throw new Error('button\'s size is only:' + sizeList.join('、'))
        }
        return true
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fill: {
      type: String,
      default: '#409EFF'
    },
    textColor: {
      type: String,
      default: '#ffffff'
    }
  },
  setup (props: any, ctx) {
    const changeEvent = (val: zebraModelType) => {
      ctx.emit(UPDATE_MODEL_EVENT, val)
      nextTick(() => {
        ctx.emit('change', val)
      })
    }
    provide(zebraRadioGroupKey, reactive({
      name: 'zebra-radio-group',
      ...toRefs(props),
      changeEvent
    }))
    return {}
  }
})
</script>
