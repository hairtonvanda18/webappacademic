import { Component, EventEmitter, Input, OnChanges, OnInit, Output, inject } from '@angular/core';
import { LogService } from '../../../core/logs/log.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() private paginationChanged = new  EventEmitter<number>();
  log = inject(LogService);

  /** The total number of records */
  @Input() totalItems: number = 0;

  /** The number of records to display */
  @Input() pageSize: number = 5;

  /** Current page */
  @Input() currentPage: number = 1;

  /** The number of buttons to show either side of the current page */
  @Input() maxSize: number = 2;

  @Input() isVisible: boolean = true;
  @Input() typeLabel: string = 'elementos';


  totalPages: any[] = [];

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.totalItems / this.pageSize));
  }

  /** Update totalPage number if the collectionSize or pageSize values change */
  ngOnChanges(changes: any) {
    this.totalPages = new Array(Math.ceil(this.totalItems / this.pageSize));

    if (changes.totalItems)
      this.currentPage = 1;
  }

  /** Set page number */
  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginationChanged.emit(this.currentPage);
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  /** Set previous page number */
  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
