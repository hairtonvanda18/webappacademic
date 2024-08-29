import { Injectable, Signal, signal } from '@angular/core';
import { Notification, NotificationType } from "./notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications = signal<Notification[]>([]);
  private currentID: number = 0;

  constructor() { }

  getNotifications(): Signal<Notification[]> {
    return this.notifications.asReadonly();
  }

  info(message: string, timeout = 3000) {
    const notification = new Notification(this.getNextIndex(), NotificationType.info, message, timeout, 'rgba(31, 100, 180, 0.9)', '#fff');
    this.updateNotifications(notification);
  }

  success(message: string, timeout = 3000) {
    const notification = new Notification(this.getNextIndex(), NotificationType.success, message, timeout, 'rgba(60, 161, 107, 0.9)', '#fff');
    this.updateNotifications(notification);
  }

  warning(message: string, timeout = 3000) {
    const notification = new Notification(this.getNextIndex(), NotificationType.warning, message, timeout, 'rgba(255, 153, 51, 0.9)', '#fff');
    this.updateNotifications(notification);
  }

  error(message: string, timeout = 4000) {
    const notification = new Notification(this.getNextIndex(), NotificationType.error, message, timeout, 'rgba(217, 83, 79, 0.9)', '#fff');
    this.updateNotifications(notification);
  }

  custom(message: string, timeout = 3000, bgColor: string, textColor: string) {
    const notification = new Notification(this.getNextIndex(), NotificationType.error, message, timeout, bgColor, textColor);
    this.updateNotifications(notification);
  }

  private updateNotifications(notification: Notification) {
    if (this.notifications().length == 2)
      this.notifications.update(value => [...value.slice(1), notification]);
    else
      this.notifications.update(value => [...value, notification]);
  }

  removeTimeOut(notification: Notification) {
    const index = this.notifications().findIndex(x => x.id == notification.id) + 1;
    this.notifications.update(value => [...value.slice(index)]);
  }

  private getNextIndex() {
    return this.currentID++;
  }

}
