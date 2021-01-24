import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../../service/localstorage/localstorage.service';
import { ContentsIn } from '../../../model/ContentsIn';
import { Page } from '../../../model/Page';
import { PostVO } from '../../../model/PostVO';
import { RootWebDto } from '../../../model/RootWebDto';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() channelId: number;
  @Input() pageNo: number;
  @Input() order: string;

  public allposts: Page<PostVO> = new Page<PostVO>();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    public rootWebDto: RootWebDto) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllContents();
  }

  ngOnInit() {
    this.getAllContents();
  }

  view() {
    this.router.navigate(['/view', { id: "1"}]);
  }

  getAllContents() {

    var contentsIn: ContentsIn = new ContentsIn();
    contentsIn.pageNo = this.pageNo ? this.pageNo : 1;
    contentsIn.channelId = this.channelId;
    contentsIn.order = this.order;
    return this.http.post(environment.baseUrl + 'contents', contentsIn)
    .then(async (data: Page<PostVO>) => {
      if (data) {
        this.allposts.copy(data);
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

}
