import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const MYLIB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MarkdownComponent),
  multi: true,
}
@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.sass'],
  providers: [MYLIB_VALUE_ACCESSOR]
})
export class MarkdownComponent implements OnInit, ControlValueAccessor {

  name: FormControl = new FormControl('');
  constructor() { }
  OnChange(_: any) {

  }

  writeValue(value: any): void {
    this.name.setValue(value);
  }
  registerOnChange(fn: (_: any) => void): void {
    this.OnChange = fn;
    console.log('registerOnChange');
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
  }
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.name.disable()
    } else {
      this.name.enable();
    }
  }

  ngOnInit() {
    this.OnChange(this.name.value);
  }
  
  input() {
    this.OnChange(this.name.value);
    console.log('input');
  }
}
