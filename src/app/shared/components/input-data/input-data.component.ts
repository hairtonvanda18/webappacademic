import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  standalone: true,
  imports: [FormsModule, DatePipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDataComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputDataComponent
    }
  ],
  templateUrl: './input-data.component.html'

})
export class InputDataComponent implements ControlValueAccessor, OnChanges, Validator {
  @Input() placeholder: string = 'dd/mm/aaaa';
  @Input() type: string = 'date';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() label: string = '';
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
    let date = null;
    if (this.type == 'datetime-local')
      date = new DatePipe('en-US').transform(value, 'yyyy-MM-ddTHH:mm');
    else
      date = new DatePipe('en-US').transform(value, 'yyyy-MM-dd');
    this.messageValue = date || '';
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.errors && control.errors['required'])
      this.required = true;
    return null;
  }
}
