import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { environment } from 'src/environments/environment';
import { ChannelOut } from '../../model/ChannelOut';
import { RootWebDto } from '../../model/RootWebDto';
import { SiteInfo } from '../../model/SiteInfo';
import { ResponseDto } from 'src/app/model/ResponseDto';

@Component({
  selector: 'app-channellist',
  templateUrl: './channellist.component.html',
  styleUrls: ['./channellist.component.sass']
})
export class ChannellistComponent implements OnInit {

  channelOut: ChannelOut = new ChannelOut();
  constructor(private http: HttpclientService,
    public siteInfo: SiteInfo,
    public rootWebDto: RootWebDto) { }

  ngOnInit() {
    this.getChannelList();
  }

  getChannelList() {
    this.http.post(environment.baseUrl + 'admin/channel/list?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
      .then((res: ResponseDto<ChannelOut>) => {
        var data = res.data;
        this.channelOut = new ChannelOut();
        this.channelOut.copy(data);
        this.siteInfo.list = data.list;
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  }

  delete(id: number) {
    this.http.post(environment.baseUrl + 'admin/channel/delete?AuthToken='+this.rootWebDto.accountProfile.authToken, {id: id})
    .then((data: any) => {
      this.getChannelList();
    })
    .catch(() => {
      console.log("error");
    });
  }

  weight(id: number) {
    this.http.post(environment.baseUrl + 'admin/channel/weight?AuthToken='+this.rootWebDto.accountProfile.authToken, {id: id})
    .then((data: any) => {
      this.getChannelList();
    })
    .catch(() => {
      console.log("error");
    });
  }

}
