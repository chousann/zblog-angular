import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountProfile } from '../../model/AccountProfile';
import { RootWebDto } from '../../model/RootWebDto';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient,
    private router: Router,
    public rootWebDto: RootWebDto) { }

  post(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Promise<Object> {
    return this.http.post(url, body, options).toPromise()
    .then(async (data: any) => {
      return data;
    }).catch(async(e: any) => {
      window.alert("error!!!");
      throw e;
    });
  }

  logout() {
    this.post(environment.baseUrl + 'logout?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
    .then(async (data: any) => {
      this.rootWebDto.accountProfile = null;
      this.router.navigate(['/']);
    })
    .catch(() => {
      this.rootWebDto.accountProfile = null;
      this.router.navigate(['/']);
      console.log("error");
    });
  }
}
