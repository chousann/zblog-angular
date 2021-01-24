import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EditingOut } from '../../model/EditingOut';
import { PostVO } from '../../model/PostVO';
import { RootWebDto } from '../../model/RootWebDto';
import { SiteInfo } from '../../model/SiteInfo';
import { User } from '../../model/user';
import { VditorComponent } from '../../common/vditor/vditor.component';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.sass']
})
export class AdmineditComponent implements OnInit {

  @ViewChild(VditorComponent)
  private vditorComponent: VditorComponent;

  status: string;
  id: any;
  public post: PostVO = new PostVO();
  user: User = new User();
  public editingOut: EditingOut = new EditingOut();
  constructor(private http: HttpclientService,
    public siteInfo: SiteInfo,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public rootWebDto: RootWebDto) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.id = this.activatedRoute.snapshot.params['id'];
      this.getPost();
    });
  }

  getPost() {
    
    this.http.post(environment.baseUrl + 'admin/post/view?AuthToken='+this.rootWebDto.accountProfile.authToken, {id: this.id})
      .then((data: EditingOut) => {
        this.editingOut = data;
        this.initPost(data);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  }

  initPost(data: EditingOut) {
    this.post.status = data.view && data.view.status ? data.view.status : '0';
    this.post.editor = data.editor ? data.editor: 'tinymce';
    this.post.id = data.view.id;
    this.post.authorId = data.view.authorId;
    this.post.thumbnail = data.view.thumbnail;
    this.post.title = data.view.title;
    this.post.channelId = data.view.channelId;
    this.post.tags = data.view.tags;
    this.vditorComponent.setEditorValue(data.view.content);
  }

  submit(status: any) {
    this.post.status = status;
    this.post.content = this.vditorComponent.getEditorValue();
    this.http.post(environment.baseUrl + 'admin/post/update?AuthToken='+this.rootWebDto.accountProfile.authToken, this.post)
      .then((data: any) => {
        this.router.navigate(['/view', { id: data}]);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
    console.log(this.post);
  }

}
