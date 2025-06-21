import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AccountProfile } from '../../model/AccountProfile';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';


@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public baseurl: string;
  user: User = new User();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    public rootWebDto: RootWebDto) {
      this.baseurl = environment.baseUrl;
     }

  ngOnInit() {
  }

  login() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(environment.baseUrl + 'login', this.user)
      .then(async (authData: AccountProfile) => {
        if (authData) {
          authData.avatar = environment.baseUrl + authData.avatar;
          this.rootWebDto.accountProfile = authData;
          this.localstorage.set("authToken", authData.authToken);
          this.router.navigate(['/']);
        }
        this.router.navigate(['/']);
        return null;
      })
      .catch(async () => {
        this.router.navigate(['/']);
      });
  }
}
