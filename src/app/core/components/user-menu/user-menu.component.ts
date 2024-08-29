import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { StorageService } from '../../../shared/storage/storage.service';
import { LoginResponse } from '../../models/login-response';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-menu.component.html',
  styles: `
    :host {
      position: relative;
    }
  `,
  animations: [
    trigger('toggleHeight', [
      state('hide', style({
        height: '0px',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('show', style({
        height: '*',
        opacity: '1'
      })),
      transition('hide => show', animate('200ms ease-in')),
      transition('show => hide', animate('200ms ease-out'))
    ])
  ]
})
export class UserMenuComponent implements OnInit {
  storage = inject(StorageService);

  isSelected: boolean = false;
  userData: LoginResponse | null = null;

  ngOnInit(): void {
    this.userData = this.storage.getUserData();
  }

  onSelect = () => {
    this.isSelected = !this.isSelected;
  };

  onHide = () => {
    this.isSelected = false;
  };

  logout = () => {
    this.storage.cleanAll();
  };
}
