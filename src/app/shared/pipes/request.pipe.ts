import { Pipe, type PipeTransform } from '@angular/core';
import { RequestTypeEnum } from '../../core/enums/request-type.enum';

@Pipe({
  name: 'appRequest',
  standalone: true
})
export class RequestPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case RequestTypeEnum.Correctiva:
        return 'Correcções';
      case RequestTypeEnum.Novo:
        return 'Novo';
      case RequestTypeEnum.Melhoria:
        return 'Melhorias';
      default:
        return '------';
    }
  }

}
