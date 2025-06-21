import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { PasswordIn } from '../../model/PasswordIn';
import { ProfileIn } from '../../model/ProfileIn';
import { ProfileOut } from '../../model/ProfileOut';
import { ResponseDto } from '../../model/ResponseDto';
import { RootWebDto } from '../../model/RootWebDto';
import { UploadDto } from '../../model/UploadDto';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';

@Component({
  standalone: false,
  selector: 'app-avatarsetting',
  templateUrl: './avatarsetting.component.html',
  styleUrls: ['./avatarsetting.component.sass']
})
export class AvatarsettingComponent implements OnInit {

  block: string = "profile";

  // 定义文件数组
  fileData: any[] = [];

  // 获取文件上传的inputHTML元素
  @ViewChild('filesMulti') private fileMulti: ElementRef;

  profile: ProfileIn = new ProfileIn();

  password: PasswordIn = new PasswordIn();

  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
  }

  select(value: string) {
    this.block = value;
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
    this.http.post(environment.baseUrl + "settings/avatar?AuthToken="+this.rootWebDto.accountProfile.authToken, formData)
      .then((res: ResponseDto<UploadDto>) => {
        var data = res.data.uploadList[0];
        this.rootWebDto.accountProfile.avatar = environment.baseUrl + data.path;
        console.log(data.path);
      })
      .catch(() => {
        console.log("error");
      });
  }

  settingProfile() {

    if(this.profile.signature == null || this.profile.signature == "" || this.profile.name == null || this.profile.name =="") {
      return;
    }
    // 上传至服务器
    this.http.post(environment.baseUrl + "settings/profile?AuthToken="+this.rootWebDto.accountProfile.authToken, this.profile)
      .then((res: ResponseDto<ProfileOut>) => {
        var data = res.data;
        this.rootWebDto.accountProfile.name = data.view.name;
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  settingPassword() {

    if(this.password.password == null || this.password.password == "" || this.password.password2 == null || this.password.password ==""
    || this.password.password != this.password.password2 || this.password.oldPassword == null || this.password.oldPassword == "") {
      return;
    }

    // 上传至服务器
    this.http.post(environment.baseUrl + "settings/password?AuthToken="+this.rootWebDto.accountProfile.authToken, this.password)
      .then((data: any) => {
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

}
