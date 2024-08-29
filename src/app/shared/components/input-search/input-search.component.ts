import { Component, EventEmitter, Input, OnChanges, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true
    }
  ],
  templateUrl: './input-search.component.html'
})
export class InputSearchComponent implements ControlValueAccessor, OnChanges {
  @Input() placeholder: string = '';
  @Input() _messageValue = '';
  @Output() private OnKeyPressed = new  EventEmitter<string>();

  constructor() {}

  propagateChange: any = () => {};

  get messageValue() {
    return this._messageValue;
  }

  set messageValue(val) {
    this._messageValue = val;
    this.propagateChange(val);
  }

  ngOnChanges() {
    this.propagateChange(this.messageValue);
  }

  writeValue(value: string) {
    this.messageValue = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  onkeydown() {
    this.OnKeyPressed.emit(this._messageValue);
  }
}
