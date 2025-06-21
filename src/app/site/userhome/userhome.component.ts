import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostVO } from '../../model/PostVO';
import { environment } from '../../../environments/environment';
import { Page } from '../../model/Page';
import { PostDto } from '../../model/PostDto';
import { ResponseDto } from '../../model/ResponseDto';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';


@Component({
  standalone: false,
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
