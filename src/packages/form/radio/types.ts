export type zebraRadioSize = 'medium' | 'small' | 'mini'
export const zebraSizeList = ['medium', 'small', 'mini']
export type zebraRadioValType = string | number | boolean
export interface ZebraRadioGroupProps {
  name: string;
  modelValue: zebraRadioValType;
  size: zebraRadioSize;
  disabled: boolean;
  fill: string;
  textColor: string;
}
