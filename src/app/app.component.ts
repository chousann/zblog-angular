import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './service/localstorage/localstorage.service';
import { Title, Meta } from '@angular/platform-browser';
import { SiteInfo } from './model/SiteInfo';
import { Channel } from './model/Channel';
import { HttpclientService } from './service/httpclient/httpclient.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zblog';
  test: string;

  constructor(
    private http: HttpclientService,
    private router: Router,
    private localstorage: LocalstorageService,
    private mtitle: Title,
    private meta: Meta,
    private elementRef: ElementRef,
    private siteInfo: SiteInfo
  ) {
    this.mtitle.setTitle(this.title);
    this.init();
    this.getInitInfo();
  }

  click(){
    console.log(this.test);
  }

  init() {
    // return this.http.post(environment.baseUrl + 'getInitInfo', null).toPromise()
    // // return this.http.get(environment.baseUrl + 'login', {params}).toPromise()
    //   .then(async (authData: AccountProfile) => {
    //     if (authData) {
    //       this.rootWebDto.accountProfile = authData;
    //       this.rootWebDto.accountProfile.email += "2";
    //       console.log(this.rootWebDto.accountProfile.email);
    //       this.localstorage.set("authToken" + authData.authToken, authData.authToken);
    //       this.router.navigate(['/']);
    //     }
    //     this.router.navigate(['/']);
    //     return null;
    //   })
    //   .catch(async () => {
    //     this.router.navigate(['/']);
    //   });
  }

  getInitInfo() {
    return this.http.post(environment.baseUrl + 'initInfo', {})
    .then(async (data: SiteInfo) => {
      if (data) {
        this.siteInfo.copy(data);
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }
}
