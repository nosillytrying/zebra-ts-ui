import { inject, computed } from 'vue'
import { useGlobalConfig } from '@/utils/util'
import { zebraRadioGroupKey, ZebraRadioGroupContext } from '../radio-group/types'
export const useRadio = () => {
  // 全局的默认配置
  const ZEBRA = useGlobalConfig()
  // 获取zebra-radio-group提供的相关信息
  const zebraRadioGroup = inject(zebraRadioGroupKey, {} as ZebraRadioGroupContext)

  // 是否包裹在zebra-radio-group组件内部
  const isGroup = computed(() => zebraRadioGroup!.name === 'zebra-radio-group')
  // const ELEMENT = useGlobalConfig()
  // const elForm = inject(elFormKey, {} as ElFormContext)
  // const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
  // const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  // const focus = ref(false)
  // const isGroup = computed(() => radioGroup?.name === 'ElRadioGroup')
  // const elFormItemSize = computed(() => elFormItem.size || ELEMENT.size)

  return {
    ZEBRA,
    zebraRadioGroup,
    isGroup
    // isGroup,
    // focus,
    // radioGroup,
    // elForm,
    // ELEMENT,
    // elFormItemSize,
  }
}
