import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../service/localstorage/localstorage.service';
import { ContentsIn } from '../../../model/ContentsIn';
import { Page } from '../../../model/Page';
import { PostVO } from '../../../model/PostVO';
import { RootWebDto } from '../../../model/RootWebDto';
import { environment } from '../../../../environments/environment';
import { PostDto } from '../../../model/PostDto';
import { ResponseDto } from '../../../model/ResponseDto';
import { HttpclientService } from '../../../service/httpclient/httpclient.service';

@Component({
  standalone: false,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() channelId: number;
  @Input() pageNo: number;
  @Input() order: string;

  public showChild: boolean = true;

  public baseUrl: string = environment.baseUrl;

  public allposts: Page<PostVO> = new Page<PostVO>();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    public rootWebDto: RootWebDto) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllContents(1);
  }

  ngOnInit() {
    this.getAllContents(1);
  }

  view() {
    this.router.navigate(['/view', { id: "1"}]);
  }

  getAllContents(num: number) {

    var contentsIn: ContentsIn = new ContentsIn();
    contentsIn.pageNo = num ? num : 1;
    contentsIn.channelId = this.channelId;
    contentsIn.order = this.order;
    return this.http.post(environment.baseUrl + 'contents', contentsIn)
    .then(async (res: ResponseDto<PostDto>) => {
      var data = res.data.postList;
      if (data) {
        this.allposts.copy(data);
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

  pageChange(page: number) {
    this.getAllContents(page);
  }

}
