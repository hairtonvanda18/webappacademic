import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../shared/components/notification/notification.service';

@Component({
  selector: 'app-add-json',
  templateUrl: './add-json.component.html'
})
export class AddJsonComponent implements OnInit {
  modal = inject(ModalService);
  notificationService = inject(NotificationService);

  formData: FormGroup = new FormGroup({ });

  ngOnInit(): void {
    this.formData = new FormGroup({
      code: new FormControl(null, [Validators.required])
    });
  }

  submitForm = () => {
    if (this.formData.invalid) {
      this.notificationService.warning('Por favor, preencha todos os campos correctamente e tente novamente!');
      return;
    }
  };
}
