import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ModalService } from './shared/components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ModalService]
})
export class AppComponent {
  title = environment.appName;
}
