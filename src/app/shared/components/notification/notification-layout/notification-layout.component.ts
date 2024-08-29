import { Component, Signal, inject } from '@angular/core';
import { Notification } from '../notification';
import { NotificationService } from '../notification.service';
import { NotificationCardComponent } from '../notification-card/notification-card.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [ NotificationCardComponent ],
  templateUrl: './notification-layout.component.html',
  styleUrl: './notification-layout.component.css'
})
export class NotificationLayoutComponent {

  notifications: Signal<Notification[]>;

  notificationService = inject(NotificationService);

  constructor() {
    this.notifications = this.notificationService.getNotifications();
  }

}
