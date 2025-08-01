import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditingOut } from '../../model/EditingOut';
import { PostVO } from '../../model/PostVO';
import { RootWebDto } from '../../model/RootWebDto';
import { User } from '../../model/user';
import { VditorComponent } from '../../common/vditor/vditor.component';
import { EditorConfig } from '../../../environments/EditorConfig';
import { environment } from '../../../environments/environment';
import { Post } from '../../model/Post';
import { ResponseDto } from '../../model/ResponseDto';
import { HttpclientService } from '../../service/httpclient/httpclient.service';

@Component({
  standalone: false,
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.sass']
})
export class EditingComponent implements OnInit {
  public baseurl: string;
  status!: string;
  public post: PostVO = new PostVO();
  user: User = new User();
  public editingOut: EditingOut = new EditingOut();

  @ViewChild(VditorComponent)
  private vditorComponent!: VditorComponent;

  constructor(private router: Router,
    public rootWebDto: RootWebDto,
    private http: HttpclientService) {
      this.baseurl = environment.baseUrl;
     }

    conf = new EditorConfig();
    markdown = '测试语句';
  
    // 同步属性内容
    syncModel(str): void {
      this.post.content = str;
    }

  ngOnInit() {
    this.getEditingInit();
  }

  changePath(path: string) {
    this.post.thumbnail = path;
  }

  getEditingInit() {

    this.http.post(environment.baseUrl + 'post/editing?AuthToken='+this.rootWebDto.accountProfile.authToken, {})
      .then((res: ResponseDto<EditingOut>) => {
        this.editingOut = res.data;
        this.initPost(res.data);
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
  }

  postSubmit() {
    this.post.content = this.vditorComponent.getEditorValue();
    this.http.post(environment.baseUrl + 'post/submit?AuthToken='+this.rootWebDto.accountProfile.authToken, this.post)
      .then((res: ResponseDto<Post>) => {
        var data = res.data.id;
        this.router.navigate(['/view', { id: data}]);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
    console.log(this.post);
  }

}
