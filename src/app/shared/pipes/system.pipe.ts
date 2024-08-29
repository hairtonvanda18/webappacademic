import { Pipe, type PipeTransform } from '@angular/core';
import { SystemEnum } from '../../core/enums/system.enum';

@Pipe({
  name: 'appSystem',
  standalone: true
})
export class SystemPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case SystemEnum['TRADESEE API']:
        return 'TRADESEE API';
      case SystemEnum['TRADESEE WEB']:
        return 'TRADESEE WEB';
      default:
        return '------';
    }
  }

}
