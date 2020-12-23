<template>
  <button :class='computedClass' :type='nativeType'>
    <zebra-icon v-if='icon && !loading && position === "left"' :icon='$props.icon'></zebra-icon>
    <zebra-icon v-if='loading' icon='loading' class='icon-loading'></zebra-icon>
    <span v-if='$slots.default' class='zebra-button--slot'>
      <slot></slot>
    </span>
    <zebra-icon v-if='icon && !loading && position === "right"' :icon='icon'></zebra-icon>
  </button>
</template>

<script lang='ts'>
// import ZebraIcon from '@/packages/basic/icon/index'
import { defineComponent, PropType, computed } from 'vue'
import { IButtonPosition, positionList, ButtonProps, IButtonSize, IButtonType, IButtonNativeType, sizeList, typeList } from './types'
export default defineComponent({
  name: 'zebra-button',
  // components: {
  //   ZebraIcon
  // },
  props: {
    position: {
      type: String as PropType<IButtonPosition>,
      default: 'left',
      ...{
        validator (position: IButtonPosition): boolean {
          if (!positionList.includes(position)) {
            throw new Error('button\'s position is only:' + sizeList.join('、'))
          }
          return true
        }
      }
    },
    size: {
      type: String as PropType<IButtonSize>,
      ...{
        validator (size: IButtonSize): boolean {
          if (!sizeList.includes(size)) {
            throw new Error('button\'s size is only:' + sizeList.join('、'))
          }
          return true
        }
      }
    },
    type: {
      type: String as PropType<IButtonType>,
      ...{
        validator (type: IButtonType): boolean {
          if (!typeList.includes(type)) {
            throw new Error('button\'s type is only:' + typeList.join('、'))
          }
          return true
        }
      }
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String as PropType<IButtonNativeType>,
      default: ''
    }
  },
  setup (props) {
    const computedClass = computed(() => {
      const ret = ['zebra-button']
      if (props.type) {
        ret.push(`zebra-button--${props.type}`)
      }
      // if (props.position) {
      //   ret.push(`zebra-button--${props.position}`);
      // }
      if (props.round) {
        ret.push('is-round')
      }
      if (props.plain) {
        ret.push('is-plain')
      }
      if (props.disabled || props.loading) {
        ret.push('is-disabled')
      }
      if (props.circle) {
        ret.push('is-circle')
      }
      if (props.size) {
        ret.push(`zebra-button--${props.size}`)
      }
      return ret
    })
    return {
      computedClass
    }
  }
})
</script>
