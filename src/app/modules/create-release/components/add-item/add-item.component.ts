import { Component, inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select } from '../../../../shared/components/select/types';
import { enumToList } from '../../../../shared/helpers/convert-enum-list';
import { RequestTypeEnum } from '../../../../core/enums/request-type.enum';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { NotificationService } from '../../../../shared/components/notification/notification.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html'
})
export class AddItemComponent implements OnInit {
  modal = inject(ModalService);
  notificationService = inject(NotificationService);


  formItem: FormGroup = new FormGroup({ });
  requestType: Select[] = [];

  ngOnInit(): void {
    this.formItem = new FormGroup({
      titulo: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, [Validators.required]),
      numeroSolicitacao: new FormControl(null, [Validators.required]),
      tipoSolicitacao: new FormControl(null, [Validators.required])
    });

    this.requestType = enumToList(RequestTypeEnum);
  }

  submitForm = () => {
    if (this.formItem.invalid) {
      this.notificationService.warning('Por favor, preencha todos os campos correctamente e tente novamente!');
      return;
    }

    //Convert numero solicitacao TODO: Change input component
    const numeroSolicitacao = this.formItem.controls['numeroSolicitacao'].value;
    this.formItem.controls['numeroSolicitacao'].setValue(Number(numeroSolicitacao));

    this.modal.closeModal();
  };
}
