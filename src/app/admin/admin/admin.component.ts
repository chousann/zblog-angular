import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { AdminOut } from '../../model/AdminOut';
import { RootWebDto } from '../../model/RootWebDto';

@Component({
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
      .then((data: AdminOut) => {
        this.adminOut.copy(data);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  }

}
