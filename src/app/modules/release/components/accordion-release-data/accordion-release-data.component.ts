import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select } from '../../../../shared/components/select/types';
import { SystemEnum } from '../../../../core/enums/system.enum';
import { enumToList } from '../../../../shared/helpers/convert-enum-list';

@Component({
  selector: 'app-accordion-release-data',
  templateUrl: './accordion-release-data.component.html'
})
export class AccordionReleaseDataComponent implements OnInit {

  formData: FormGroup = new FormGroup({ });
  systems: Select[] = [];

  ngOnInit(): void {
    this.formData = new FormGroup({
      sistema: new FormControl({value: "TRADESEE API", disabled: true}),
      versao: new FormControl({value: "4.11.0.0", disabled: true}),
      dataPublicacao: new FormControl({value: "21/08/2024", disabled: true})
    });

    this.systems = enumToList(SystemEnum);
  }
}
