import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, forwardRef, inject } from '@angular/core';
import { Select } from './types';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { LogService } from '../../../core/logs/log.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideDirective
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectComponent
    }
  ],
  animations: [
    trigger('toggleHeight', [
      state('hide', style({
        height: '0px',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('show', style({
        height: '*',
        opacity: '1'
      })),
      transition('hide => show', animate('200ms ease-in')),
      transition('show => hide', animate('200ms ease-out'))
    ])
  ],
  templateUrl: './select.component.html'
})
export class SelectComponent implements ControlValueAccessor, OnChanges, Validator {
  log = inject(LogService);

  @Output() private selectionChanged = new  EventEmitter<Select>();
  @Input('placeholder') _placeHolder = "Select Item";
  @Input('value') _messageValue: string = '';
  @Input() label: string = '';
  @Input() selectFirst: boolean = false;
  @Input() returnID: boolean = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() list: Select[] = [
    {id: '1', value: 'Ivovacao'},
    {id: '2', value: 'Ivovacao 2'},
    {id: '3', value: 'Ivovacao 3'}
  ];

  selectedItem: Select | null = null;
  isOpened: boolean = false;

  constructor() { }

  propagateChange: any = () => {};

  get messageValue() {
    return this._messageValue;
  }

  set messageValue(val: string) {
    this._messageValue = val;
    this.propagateChange(val);
  }

  get placeholder() {
    return this.selectedItem ? this.selectedItem.value : this._placeHolder;
  }

  ngOnChanges(changes: any) {
    if (changes.list) {
      const newItem: Select = {id: '-1', value: this._placeHolder};
      this.list.unshift(newItem);
      this.selectedItem = this.selectFirst
        ? this.list[1]
        : this.list[0];
    }
  }

  writeValue(value: string) {
    const item = this.list.filter(x => x.id === value);

    if (item && item.length > 0)
      this.handleSelect(item[0]);
    else
      this.handleSelect(this.list[0]);
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  handleSelect = (valueSelected: Select) => {
    this.selectedItem = valueSelected;
    this.messageValue = this.returnID ? valueSelected.id : valueSelected.value;
    this.selectionChanged.emit(valueSelected);
  };

  handleOpen() {
    this.isOpened = !this.isOpened;
  }

  hideDrop() {
    this.isOpened = false;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.errors && control.errors['required'])
      this.required = true;
    return null;
  }
}
