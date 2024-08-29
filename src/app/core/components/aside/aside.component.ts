import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideService } from '../../services/aside.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './aside.component.html'
})
export class AsideComponent {
  asideService = inject(AsideService);

  listMenus = [
    {
      name: 'Lista das Releases',
      route: '/releases',
      icon: 'assets/icons/task.svg'
    },
    {
      name: 'Nova Release',
      route: '/create-release',
      icon: 'assets/icons/add-process.svg'
    }
  ];
}
