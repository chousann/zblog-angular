import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { ChannelDetailOut } from '../../model/ChannelDetailOut';
import { ContentsIn } from '../../model/ContentsIn';
import { Page } from '../../model/Page';
import { PostVO } from '../../model/PostVO';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { environment } from '../../../environments/environment';
import { ResponseDto } from '../../model/ResponseDto';

@Component({
  standalone: false,
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.sass']
})
export class ChannelComponent implements OnInit {

  id!: number;
  channelDetailOut: ChannelDetailOut = new ChannelDetailOut();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.getChannelDetail();
    });
  }

  getChannelDetail() {

    var contentsIn: ContentsIn = new ContentsIn();
    contentsIn.channelId = 1;
    contentsIn.size = 3;
    this.http.post(environment.baseUrl + 'channel', { id: this.id })
      .then(async (res: ResponseDto<ChannelDetailOut>) => {
        this.channelDetailOut.copy(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  }

}
