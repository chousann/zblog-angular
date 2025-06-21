import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { AdminOut } from '../../model/AdminOut';
import { RootWebDto } from '../../model/RootWebDto';
import { environment } from '../../../environments/environment';
import { ResponseDto } from '../../model/ResponseDto';

@Component({
  standalone: false,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public adminOut: AdminOut = new AdminOut();
  constructor(private http: HttpClient,
    private clientService: HttpclientService,
    public rootWebDto: RootWebDto) { }

  ngOnInit() {
    this.getAdminInfo();
  }

  getAdminInfo() {

    this.clientService.post(environment.baseUrl + 'admin?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
      .then((res: ResponseDto<AdminOut>) => {
        this.adminOut.copy(res.data);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  }

  reload_options() {

    this.clientService.post(environment.baseUrl + 'admin/options/reload_options?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
      .then((data: Object) => {
        console.log(data);
      })
      .catch(() => {
        console.log("error");
        alert("error");
      });
  }

}
