import { getCurrentInstance } from 'vue'
export const useGlobalConfig = () => {
  // const vm = getCurrentInstance()!
  // if (!!vm.proxy && '$ZEBRA' in vm.proxy) {
  //   return (vm.proxy as Record<string, object>).$ZEBRA
  // }
  const vm = getCurrentInstance() as any
  if ('$ZEBRA' in vm.proxy) {
    return vm.proxy.$ZEBRA
  }
  return {}
}
export interface Validator {
  (...args: any): boolean;
}
export function isValidatorCustomize (validator: Validator) {
  return { validator } as object
}
