import { Component, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ResponseDto } from '../../../model/ResponseDto';
import { RootWebDto } from '../../../model/RootWebDto';
import { UserInfoOut } from '../../../model/UserInfoOut';
import { HttpclientService } from '../../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../../service/localstorage/localstorage.service';

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, OnChanges {

  public baseUrl: string = environment.baseUrl;
  
  @Input("userId")
  public userId: any;
  public info: UserInfoOut = new UserInfoOut();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router,) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getUserInfo();
  }

  ngOnInit() {

  }

  getUserInfo() {
    this.http.post(environment.baseUrl + 'users/home?AuthToken='+this.rootWebDto.accountProfile.authToken, {userId: this.userId})
    .then(async (res: ResponseDto<UserInfoOut>) => {
      this.info.copy(res.data);

    })
    .catch(() => {
      console.log("error");
    });
  }

}
