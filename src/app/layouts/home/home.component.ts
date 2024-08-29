import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AsideComponent } from '../../core/components/aside/aside.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AsideService } from '../../core/services/aside.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AsideComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  asideService = inject(AsideService);
}
