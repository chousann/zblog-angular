import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { AccountProfile } from '../../model/AccountProfile';
import { PostListOut } from '../../model/PostListOut';
import { PostVO } from '../../model/PostVO';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.sass']
})
export class PostlistComponent implements OnInit {

  public postList: PostListOut = new PostListOut();
  public checkMap = new Map();
  public baseUrl: string = environment.baseUrl;

  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    public rootWebDto: RootWebDto) { }

  ngOnInit() {
    this.getPostList();
  }

  change(event: any, id: any) {
    console.log(event.target.checked);
    this.checkMap.set(id, event.target.checked);
  }

  getPostList() {
    return this.http.post(environment.baseUrl + 'admin/post/list?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
    .then(async (authData: any) => {
      if (authData) {
        this.postList = new PostListOut();
        this.postList.copy(authData);
        this.checkMap = new Map();
        this.postList.page.content.forEach((value: PostVO) => {
          this.checkMap.set(value.id, false);
        })
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

  featured(id: any) {
    this.doUpdateFeatured(id, 1);

  }

  unfeatured(id: any) {
    this.doUpdateFeatured(id, 0);
  }

  weight(id: any) {
    this.doUpdateWeight(id, 1);
  }

  unweight(id: any) {
    this.doUpdateWeight(id, 0);
  }

  batch_del() {
    var list: PostVO[] = [];
    this.checkMap.forEach((value, key) => {
      if(value) {
        var item: PostVO = new PostVO();
        item.id = key;
        list.push(item);
      }
    });

    this.deleteList(list);
  }

  delete(id: any) {
    var list: PostVO[] = [];
    var item: PostVO = new PostVO();
    item.id = id;
    list.push(item);
    this.deleteList(list);
  }

  deleteList(list: PostVO[]) {

    this.http.post(environment.baseUrl + 'admin/post/delete?AuthToken='+this.rootWebDto.accountProfile.authToken, list)
    .then(async (authData: any) => {
      if (authData) {
        this.getPostList();
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

  doUpdateFeatured(id: any, feature: any) {
    var post: PostVO = new PostVO();
    post.id = id;
    post.featured = feature;
    this.http.post(environment.baseUrl + 'admin/post/featured?AuthToken='+this.rootWebDto.accountProfile.authToken, post)
    .then(async (authData: any) => {
      if (authData) {
        this.getPostList();
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

  doUpdateWeight(id: any, weight: any) {
    var post: PostVO = new PostVO();
    post.id = id;
    post.weight = weight;
    this.http.post(environment.baseUrl + 'admin/post/weight?AuthToken='+this.rootWebDto.accountProfile.authToken, post)
    .then(async (authData: any) => {
      if (authData) {
        this.getPostList();
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

}
