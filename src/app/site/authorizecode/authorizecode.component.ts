import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../model/user';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountProfile } from '../../model/AccountProfile';
import { RootWebDto } from '../../model/RootWebDto';
import { environment } from '../../../environments/environment';
import { HttpclientService } from '../../service/httpclient/httpclient.service';

@Component({
  standalone: false,
  selector: 'authorize-code',
  templateUrl: './authorizecode.component.html',
  styleUrls: ['./authorizecode.component.sass']
})
export class AuthorizecodeComponent implements OnInit {

  user: User = new User();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    private route: ActivatedRoute,
    public rootWebDto: RootWebDto) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      console.log("params");
      console.log("AUTHTOKEN: " + params["AUTHTOKEN"]);
    });

    var arr = window.location.href.split("?");
    if (arr != null && arr.length >= 2 && arr[1] != null) {
      this.authorizecode(arr[1]);
    }
  }

  authorizecode(querystring: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(environment.baseUrl + 'authorizeCode?'+querystring, {})
      .then(async (authData: any) => {
        console.log(authData);
        if (authData != null && authData["AUTHTOKEN"] != null) {
          this.login(authData["AUTHTOKEN"]);
        }
        this.router.navigate(['/']);
      })
      .catch(async () => {
        this.router.navigate(['/']);
      });
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
          this.router.navigate(['/']);
        }
        //this.router.navigate(['/']);
        return null;
      })
      .catch(async () => {
        this.router.navigate(['/']);
      });
  }
}
