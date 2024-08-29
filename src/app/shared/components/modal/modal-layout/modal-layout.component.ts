import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './modal-layout.component.html',
  styleUrl: './modal-layout.component.css',
  providers: [ModalService]
})
export class ModalLayoutComponent implements OnInit {

  @Input() title: string = "Modal Title";
  @Output() closeModal = new EventEmitter();

  modalService = inject(ModalService);

  ngOnInit(): void {
    this.modalService.addEventClose(this.closeModal);
  }

  onClose(): void {
    this.closeModal.emit();
  }

}
