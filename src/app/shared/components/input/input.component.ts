import { Component, Input, OnChanges, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputComponent
    }
  ],
  templateUrl: './input.component.html'
})
export class InputComponent implements ControlValueAccessor, OnChanges, Validator {
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
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

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.errors && control.errors['required'])
      this.required = true;
    return null;
  }
}
