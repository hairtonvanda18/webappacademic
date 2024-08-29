import { Component, inject, OnInit } from '@angular/core';
import { Select } from '../../../../shared/components/select/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { enumToList } from '../../../../shared/helpers/convert-enum-list';
import { SystemEnum } from '../../../../core/enums/system.enum';
import { Item } from '../../../release/models/item';
import { NotificationService } from '../../../../shared/components/notification/notification.service';
import { Release } from '../../../release/models/release';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  notificationService = inject(NotificationService);

  formData: FormGroup = new FormGroup({ });
  ultimaVersao = new FormControl('');
  systems: Select[] = [];
  itens = new Set<Item>([]);

  isLoadingVersion: boolean = false;
  isSubmitting: boolean = false;
  showAddItem: boolean = false;
  showAddJson: boolean = false;

  ngOnInit(): void {
    this.formData = new FormGroup({
      sistema: new FormControl('', [Validators.required]),
      versao: new FormControl('', [Validators.required]),
      dataPublicacao: new FormControl('', [Validators.required])
    });

    this.systems = enumToList(SystemEnum);
  }

  receiveDataJson = (release: Release) => {
    this.cleanForm();
    const { itens, ...releaseData } = release;
    this.formData.setValue(releaseData);
    this.itens = new Set(itens);
  };

  addItem = (item: Item) => {
    this.itens.add(item);
  };

  removeItem = (item: Item) => {
    this.itens.delete(item);
  };

  cleanForm = () => {
    this.formData.reset();
    this.itens.clear();
  };

  submitForm = async () => {
    if (this.formData.invalid) {
      this.notificationService.warning('Por favor, preencha todos os campos correctamente e tente novamente!');
      return;
    }

    this.isSubmitting = true;
    
    this.cleanForm();

    this.isSubmitting = false;
  };
}
