import { Component, Input, OnInit, inject } from '@angular/core';
import { Notification } from '../notification';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [ BrowserAnimationsModule ],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.css',
  animations: [
    trigger("inOutAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [
        animate(
          '300ms ease',
          keyframes([
            style({ opacity: 0, offset: 0, transform: 'scale(0.8) translateY(100%)'}),
            style({ opacity: 1, offset: 1, transform: 'scale(1) translateY(0)' })
          ])
        )
      ]),
      transition(":leave", [
        animate(
          '300ms ease',
          keyframes([
            style({ opacity: 1, offset: 0, transform: 'scale(1) translateY(0)' }),
            style({ opacity: 0, offset: 1, transform: 'scale(0.9) translateY(-80px)' })
          ])
        )
      ])
    ])
  ]
})
export class NotificationCardComponent implements OnInit {
  @Input() notification?: Notification;
  @Input() animate: boolean = false;

  notificationService = inject(NotificationService);

  ngOnInit(): void {
    setTimeout(() => {
      this.notificationService.removeTimeOut(this.notification!);
    }, this.notification?.timeout);
  }

}
