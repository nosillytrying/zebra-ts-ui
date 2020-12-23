import { InjectionKey } from 'vue'
// type  字面量
export type zebraRadioGroupSize = 'medium' | 'small' | 'mini'
export type zebraModelType = boolean | number | string
// 接口 interface
export interface ZebraRadioGroupContext {
  name: 'zebra-radio-group';
  modelValue: zebraModelType;
  size: zebraRadioGroupSize;
  disabled: boolean;
  fill: string;
  textColor: string;
  changeEvent: (val: zebraModelType) => void;
}

// const 常量
export const zebraRadioGroupKey = 'zebraRadioGroup'
export const sizeList = ['medium', 'small', 'mini']
