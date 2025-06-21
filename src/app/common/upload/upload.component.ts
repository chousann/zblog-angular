import { Component, ElementRef, EventEmitter, forwardRef, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { RootWebDto } from '../../model/RootWebDto';
import { ResponseDto } from '../../model/ResponseDto';
import { UploadDto } from '../../model/UploadDto';

export const upload_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UploadComponent),
  multi: true,
}

@Component({
  standalone: false,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass'],
  providers: [upload_VALUE_ACCESSOR]
})
export class UploadComponent implements OnInit, ControlValueAccessor {

  paths: FormControl = new FormControl('');

  path!: string;

  baseUrl: string = environment.baseUrl;

  @Output() changePath = new EventEmitter<string>();

  // 获取文件上传的inputHTML元素
  @ViewChild('filesMulti')
  private fileMulti!: ElementRef;
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto) { }

    OnChange(_: any) {

    }

  writeValue(obj: any): void {
    this.paths.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.OnChange = fn;
    console.log('registerOnChange');
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.paths.disable()
    } else {
      this.paths.enable();
    }
  }

  ngOnInit() {
  }

  fileChange() {
    this.fileUpload();
  }

  fileUpload() {

    // 获取选中的文件数组
    const t_files = this.fileMulti.nativeElement.files;

    // 构造参数
    const formData = new FormData();
    for (let i = 0; i < t_files.length; i++) {
      formData.append('file', t_files[i], t_files[i].name);
    }

    // 上传至服务器
    this.http.post(environment.baseUrl + "post/upload?AuthToken=" + this.rootWebDto.accountProfile.authToken, formData)
      .then((res: ResponseDto<UploadDto>) => {
        var data = res.data.uploadList;
        this.path = this.baseUrl + "store/storage/md/" + this.rootWebDto.accountProfile.username + "/" + data[0].path;
        this.paths.setValue(data[0].path);
        this.OnChange(data[0].path);
        this.changePath.emit(data[0].path);
        console.log(data[0].path);
      })
      .catch(() => {
        console.log("error");
      });
  }
}
