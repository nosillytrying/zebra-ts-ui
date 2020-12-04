export type IButtonSize = 'medium' | 'small' | 'mini'
export type IButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
export type IButtonNativeType = 'button' | 'submit' | 'reset'
export type IButtonPosition = 'left' | 'right'
export const positionList = ['left', 'right']
export const sizeList = ['medium', 'small', 'mini']
export const typeList = ['primary', 'success', 'warning', 'danger', 'info', 'text']

export interface ButtonProps{
  position: IButtonPosition;
  type?: IButtonType;
  size?: IButtonSize;
  icon?: string;
  nativeType?: IButtonNativeType;
  loading?: boolean;
  disabled?: boolean;
  plain?: boolean;
  autofocus?: boolean;
  round?: boolean;
  circle?: boolean;
}
