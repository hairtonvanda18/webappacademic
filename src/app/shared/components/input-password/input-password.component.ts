import { Component, Input, OnChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true
    }
  ],
  templateUrl: './input-password.component.html'
})
export class InputPasswordComponent implements ControlValueAccessor, OnChanges  {
  type: string = 'password';
  @Input() placeholder: string = 'Palavra-Passe';
  @Input() label: string = '';
  @Input() src: string = 'assets/icons/eye.svg';

  value!: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
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

  toggleTypePassword() {
    if (this.type === 'text') {
      this.type = 'password';
      this.src = 'assets/icons/eye.svg';
    }
    else {
      this.type = 'text';
      this.src = 'assets/icons/eye-close.svg';
    }
  }
}
