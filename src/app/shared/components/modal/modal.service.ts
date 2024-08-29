import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {

  @Output() private closeEvent = new EventEmitter();

  constructor() { }

  addEventClose(event: EventEmitter<unknown>): void {
    this.closeEvent = event;
  }

  closeModal(): void {
    this.closeEvent.emit();
  }

}
