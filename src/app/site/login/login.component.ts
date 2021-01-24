import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../model/user';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { Router } from '@angular/router';
import { AccountProfile } from '../../model/AccountProfile';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    public rootWebDto: RootWebDto) { }

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
