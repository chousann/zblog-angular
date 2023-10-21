import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './service/localstorage/localstorage.service';
import { Title, Meta } from '@angular/platform-browser';
import { SiteInfo } from './model/SiteInfo';
import { Channel } from './model/Channel';
import { HttpclientService } from './service/httpclient/httpclient.service';
import { AccountProfile } from './model/AccountProfile';
import { RootWebDto } from './model/RootWebDto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zblog';
  test: string;
  AUTHTOKEN: string;

  constructor(
    private http: HttpclientService,
    private router: Router,
    private localstorage: LocalstorageService,
    private mtitle: Title,
    private meta: Meta,
    private elementRef: ElementRef,
    private siteInfo: SiteInfo,
    public rootWebDto: RootWebDto,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.mtitle.setTitle(this.title);
    this.init();
    this.getInitInfo();

    if(this.localstorage.get("authToken")) {
      this.AUTHTOKEN = this.localstorage.get("authToken");
      this.initauth();
    }
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
    if (this.localstorage.get("state") == null || this.localstorage.get("state") === "") {
    this.localstorage.set("state", this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
    }

    const queryParamsString = window.location.search.substr(1);
    const queryParams = {};

    queryParamsString.split('&').forEach(param => {
      const keyValue = param.split('=');
      const key = decodeURIComponent(keyValue[0]);
      const value = decodeURIComponent(keyValue[1] || '');
      queryParams[key] = value;
    });

    console.log("params");
    console.log("AUTHTOKEN: " + queryParams["AUTHTOKEN"]);
    if (queryParams["AUTHTOKEN"] !== null) {
      this.AUTHTOKEN = queryParams["AUTHTOKEN"];
      this.initauth();
    }

    // this.route.queryParams.subscribe((params: Params) => {
    //   console.log("params");
    //   console.log("AUTHTOKEN: " + params["AUTHTOKEN"]);
    //   this.AUTHTOKEN = params["AUTHTOKEN"];
    //   this.initauth();
    // });
  }

  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }



  getInitInfo() {
    return this.http.post(environment.baseUrl + 'initInfo', {})
    .then(async (data: SiteInfo) => {
      if (data) {
        this.siteInfo.copy(data);
        this.siteInfo.options["state"] = this.localstorage.get("state");
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

  initauth() {
    
    // var arr = window.location.href.split("?");
    // if (arr != null && arr.length >= 2 && arr[1] != null) {
    //   var token = arr[1].split("=");
    //   if (token != null && token.length >= 2 && token[1] != null) {
    //     this.login(token[1]);
  

    //   }
    // }

    if (this.AUTHTOKEN != null) {
      this.login(this.AUTHTOKEN);
    }
  }

  login(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(environment.baseUrl + 'authInfo?AuthToken='+token, {})
      .then(async (authData: AccountProfile) => {
        if (authData) {
          authData.avatar = environment.baseUrl + authData.avatar;
          this.rootWebDto.accountProfile = authData;
          this.localstorage.set("authToken", authData.authToken);
          //this.router.navigate(['/']);
        }
        //this.router.navigate(['/']);
        return null;
      })
      .catch(async () => {
        this.localstorage.remove("authToken");
        this.router.navigate(['/']);
      });
  }
}
