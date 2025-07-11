import { HttpClient } from '@angular/common/http';
import { Compiler, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { Channel } from '../../model/Channel';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { environment } from '../../../environments/environment';
import { ResponseDto } from '../../model/ResponseDto';
import { SiteInfo } from '../../model/SiteInfo';

@Component({
  standalone: false,
  selector: 'app-channelview',
  templateUrl: './channelview.component.html',
  styleUrls: ['./channelview.component.sass']
})
export class ChannelviewComponent implements OnInit {

  id: any;
  public view: Channel = new Channel();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router,
    private compiler: Compiler) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => { 
          this.id = this.activatedRoute.snapshot.params['id'];
          if(!this.id) {
            this.view = new Channel();
            return;
          }
          this.getChannelInfo();
        });
    }
  
  
    getChannelInfo() {
      this.http.post(environment.baseUrl + 'admin/channel/view?AuthToken='+this.rootWebDto.accountProfile.authToken, {id: this.id})
      .then(async (res: ResponseDto<Channel>) => {
        var data = res.data;
        if(data) {
          console.log(data);
          this.view = new Channel();
          this.view.copy(data);
        }
      })
      .catch(() => {
        console.log("error");
      });
    }

    submit() {
      this.http.post(environment.baseUrl + 'admin/channel/update?AuthToken='+this.rootWebDto.accountProfile.authToken, this.view)
      .then(async (res: ResponseDto<SiteInfo>) => {
        var data = res.data.list;
        if(data) {
          console.log(data);
          this.router.navigate(['/channels']);
        }
      })
      .catch(() => {
        console.log("error");
      });
    }

}
