import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    UserMenuComponent
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent { }
