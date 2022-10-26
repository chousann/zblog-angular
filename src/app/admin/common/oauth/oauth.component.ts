import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootWebDto } from 'src/app/model/RootWebDto';
import { SiteInfo } from 'src/app/model/SiteInfo';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.sass']
})
export class OauthComponent implements OnInit {

  public options: Map<any, any> = new Map<any, any>();
  constructor(private http: HttpclientService,
    private rootWebDto: RootWebDto,
    private router: Router,
    public siteInfo: SiteInfo) { }

  ngOnInit() {

  }
  submit() {
    this.updateSiteInfo();
  }
  updateSiteInfo() {
    this.http.post(environment.baseUrl + 'admin/options/update?AuthToken='+this.rootWebDto.accountProfile.authToken, this.siteInfo.options)
    .then(async (data: Map<any, any>) => {
      this.siteInfo.options = data;
      this.router.navigate(['/admin']);
    })
    .catch(() => {
      console.log("error");
    });
  }

}
