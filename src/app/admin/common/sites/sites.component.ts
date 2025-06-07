import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { environment } from 'src/environments/environment';
import { RootWebDto } from '../../../model/RootWebDto';
import { SiteInfo } from '../../../model/SiteInfo';
import { ResponseDto } from 'src/app/model/ResponseDto';
import { ResponseData } from 'src/app/model/ResponseData';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.sass']
})
export class SitesComponent implements OnInit {

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
    .then(async (res: ResponseDto<ResponseData>) => {
      var data = res.data.map;
      this.siteInfo.options = data;
      this.router.navigate(['/admin']);
    })
    .catch(() => {
      console.log("error");
    });
  }

}
