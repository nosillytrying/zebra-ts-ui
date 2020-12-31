import type { VNode } from 'vue'

export type NotificationVM = VNode
type NotificationQueueItem = {
  vm: NotificationVM;
  $el: HTMLElement;
}
export type positionEnum='top-right'|'top-left'|'bottom-right'|'bottom-left';
export type NotificationQueue = Array<NotificationQueueItem>
export type TNotificationOptions = {
  id?: string;
  title?: string;
  message?: string|NotificationVM;
  dangerouslyUseHTMLString?: boolean;
  type?: 'success'|'warning'|'info'|'error';
  iconClass?: string;
  customClass?: string;
  duration?: number;
  position?: positionEnum;
  showClose?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  offset?: number;
  zIndex?: number;
}
export interface TNotificationHandle {
  close: () => void;
}
export interface TNotification {
  (options?: TNotificationOptions): TNotificationHandle|void;
}
