import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EditorConfig } from 'src/environments/EditorConfig';
export const MYLIB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EditorComponent),
  multi: true,
}
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass'],
  providers: [MYLIB_VALUE_ACCESSOR]
})
export class EditorComponent implements OnInit, ControlValueAccessor {

  name: FormControl = new FormControl('');
  constructor() { }
  OnChange(_: any) {

  }

  title = 'app';

  conf = new EditorConfig();
  markdown = '测试语句';

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
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
