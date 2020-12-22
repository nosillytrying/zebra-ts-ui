<template>
  <label role="radio" :class='computedClass' tabIndex='0'>
    <span class='zebra-radio__input'>
      <span class='zebra-radio__inner'></span>
      <input class='zebra-radio__original'
       @change='handleChange'
       :disabled='disabled'
       aria-hidden="true"
       type="radio"
       :value='label'
       v-model='model'
       :name='name'
      tabIndex='-1'
      ref='radioRef'
      >
    </span>
    <span class='zebra-radio__label'>
      <slot></slot>
    </span>
  </label>
</template>

<script lang='ts'>
import { useRadio } from './useRadio'
import { UPDATE_MODEL_EVENT } from '@/utils/constant'
import { defineComponent, computed, PropType, nextTick, ref } from 'vue'
import { zebraRadioSize, zebraRadioValType, zebraSizeList } from './types'
import { isValidatorCustomize } from '@/utils/util'
export default defineComponent({
  name: 'zebra-radio',
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
    name: {
      type: String
    },
    size: {
      type: String as PropType<zebraRadioSize>,
      ...isValidatorCustomize((size: zebraRadioSize) => {
        if (!zebraSizeList.includes(size)) {
          throw new Error('button\'s size is only:' + zebraSizeList.join('、'))
        }
        return true
      })
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    const {
      ZEBRA,
      isGroup,
      zebraRadioGroup
    } = useRadio()
    const handleChange1 = (e: MouseEvent) => {
      return 'a'
    }
    const radioRef = ref<HTMLInputElement>()
    const model = computed<zebraRadioValType>({
      get: () => {
        return isGroup.value ? zebraRadioGroup.modelValue : props.modelValue
      },
      set: (val) => {
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
      const ret: string[] = ['zebra-radio']
      const size = computed(() => {
        return zebraRadioGroup.size || props.size || ZEBRA.size
      })
      // 是否有border
      if (props.border) {
        ret.push('is-border')
      }
      // border存在的时候后size才会生效
      if (size.value && props.border) {
        ret.push(`zebra-radio--${size.value}`)
      }
      // 是否选中
      if (props.label === model.value) {
        ret.push('is-checked')
      }
      // 是否不可选
      if (props.disabled) {
        ret.push('is-disabled')
      }
      return ret
    })

    return {
      radioRef,
      model,
      computedClass,
      handleChange
    }
  }
})
</script>
