import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { toggle } from './types';

@Component({
  selector: 'app-toggle-group',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleGroupComponent),
      multi: true
    }
  ],
  templateUrl: './toggle-group.component.html'
})
export class ToggleGroupComponent implements ControlValueAccessor, OnChanges {
  @Output() private selectionChanged = new  EventEmitter<string>();
  @Input('value') _value = '';
  @Input() list: toggle[] = [
    { id: '-1', value: 'Todos' },
    { id: '0', value: 'Administrador' },
    { id: '1', value: 'Assistente' },
    { id: '2', value: 'Visualizador' }
  ];

  @Input() selectedId: string = '-1';

  constructor() {}

  propagateChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(val);
  }

  ngOnChanges() {
    this.propagateChange(this.value);
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  handleSelectItem = (id: string) => {
    if (this.selectedId === id)
      return;

    this.selectionChanged.emit(this.list.find(a => a.id == id)?.value);

    this.selectedId = id;
    this.value = id;
  };
}
