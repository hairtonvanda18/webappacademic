import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], page: number, perPage: number = 5): any[] {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    return value.slice(start, end);
  }

}
