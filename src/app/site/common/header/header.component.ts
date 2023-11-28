import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { environment } from 'src/environments/environment';
import { AccountProfile } from '../../../model/AccountProfile';
import { AdminOut } from '../../../model/AdminOut';
import { BadgesCount } from '../../../model/BadgesCount';
import { Channel } from '../../../model/Channel';
import { ChannelOut } from '../../../model/ChannelOut';
import { EditingOut } from '../../../model/EditingOut';
import { Options } from '../../../model/Options';
import { Post } from '../../../model/Post';
import { PostAttribute } from '../../../model/PostAttribute';
import { PostListOut } from '../../../model/PostListOut';
import { PostVO } from '../../../model/PostVO';
import { RootWebDto } from '../../../model/RootWebDto';
import { SiteInfo } from '../../../model/SiteInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  base: String;
  row: object;
  AccountProfile: AccountProfile = new AccountProfile();
  AdminOut: AdminOut = new AdminOut();
  BadgesCount: BadgesCount =new BadgesCount();
  Channel: Channel = new Channel();
  EditingOut: EditingOut= new EditingOut();
  Options: Options = new Options();
  Post: Post = new Post();
  PostAttribute : PostAttribute = new PostAttribute();
  PostListOut: PostListOut = new PostListOut();
  PostVO: PostVO = new PostVO();

  public queryString: string;

  public baseurl: string;

  channelOut: ChannelOut;
  constructor(public rootWebDto: RootWebDto,
    public siteInfo: SiteInfo,
    private router: Router,
    private http: HttpclientService) {
      this.baseurl = environment.baseUrl + "oauth2/authorization/client1";
     }

  ngOnInit() {
    console.log(111);
  }

  getChannelList() {
    this.http.post(environment.baseUrl + 'admin/channel/list?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
      .then((data: ChannelOut) => {
        this.channelOut = new ChannelOut();
        this.channelOut.copy(data);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  }

  select(id: any) {
    console.log(id);
  }

  logout() {
    this.http.logout();
  }

  search1() {
    this.http.post(environment.baseUrl + 'search/init', {})
      .then((data: any) => {
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  search() {
    this.router.navigate(['/search', { queryString: this.queryString}]);
  }

}
