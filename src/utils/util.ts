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

export function isServer () {
  return typeof window === 'undefined'
}

export const on = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}
export const off = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject
): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler)
  }
}
