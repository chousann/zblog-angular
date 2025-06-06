import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/model/Page';
import { PostDto } from 'src/app/model/PostDto';
import { PostVO } from 'src/app/model/PostVO';
import { ResponseDto } from 'src/app/model/ResponseDto';
import { RootWebDto } from 'src/app/model/RootWebDto';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.sass']
})
export class UserhomeComponent implements OnInit {

  public userId: any;
  results: Page<PostVO> = new Page<PostVO>();;
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.userId = this.activatedRoute.snapshot.params['userId'];
      this.getUserContents();
    });
  }

  getUserContents() {
    this.http.post(environment.baseUrl + 'user/contents', {userId: this.userId})
            .then(async (res: ResponseDto<PostDto>) => {
              var data = res.data.postList;
              this.results.copy(data);
            })
    .catch(() => {
      console.log("error");
    });
  }

}
