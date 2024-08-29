import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeparatorComponent),
      multi: true
    }
  ],
  templateUrl: './separator.component.html',
  styles: `
    :host {
      padding: 16px 0;
    }
  `
})
export class SeparatorComponent implements ControlValueAccessor, OnChanges {
  @Input('messageValue') _messageValue = '';

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
}
