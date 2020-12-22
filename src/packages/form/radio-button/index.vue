<template>
  <label :class="computedClass" tabIndex="0">
    <input
      class="zebra-radio-button__orig-radio"
      @change="handleChange"
      :disabled="disabled"
      aria-hidden="true"
      type="radio"
      :value="label"
      v-model="model"
      tabIndex="-1"
    />
    <span class="zebra-radio-button__inner">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, nextTick } from 'vue'
import { UPDATE_MODEL_EVENT } from '@/utils/constant'
import { useRadio } from '../radio/useRadio'
import { isValidatorCustomize } from '@/utils/util'
import {
  zebraRadioSize,
  zebraSizeList,
  zebraRadioValType
} from '../radio/types'
export default defineComponent({
  name: 'zebra-radio-button',
  emits: [UPDATE_MODEL_EVENT, 'change'],
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: ''
    },
    label: {
      type: [Boolean, Number, String],
      default: ''
    },
    size: {
      type: String as PropType<zebraRadioSize>,
      ...isValidatorCustomize((size: zebraRadioSize) => {
        if (!zebraSizeList.includes(size)) {
          throw new Error("button's size is only:" + zebraSizeList.join('、'))
        }
        return true
      })
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    const { isGroup, zebraRadioGroup, ZEBRA } = useRadio()
    const model = computed<zebraRadioValType>({
      get: () => {
        return isGroup.value ? zebraRadioGroup.modelValue : props.modelValue
      },
      set: val => {
        if (isGroup.value) {
          zebraRadioGroup.changeEvent(val)
        } else {
          ctx.emit(UPDATE_MODEL_EVENT, val)
        }
      }
    })
    const handleChange = () => {
      nextTick(() => {
        ctx.emit('change', model.value)
      })
    }
    const computedClass = computed<string[]>(() => {
      const ret: string[] = ['zebra-radio-button']
      const size = computed(() => {
        return zebraRadioGroup.size || props.size || ZEBRA.size
      })
      if (size.value) {
        ret.push(`zebra-radio-button--${size.value}`)
      }
      if (model.value === props.label) {
        ret.push('is-checked')
      }
      if (props.disabled) {
        ret.push('is-disabled')
      }
      return ret
    })
    return {
      model,
      handleChange,
      computedClass
    }
  }
})
</script>
