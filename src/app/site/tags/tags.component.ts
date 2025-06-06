import { HttpClient } from '@angular/common/http';
import { Compiler, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { Page } from '../../model/Page';
import { RootWebDto } from '../../model/RootWebDto';
import { TagVO } from '../../model/TagVO';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { ResponseDto } from 'src/app/model/ResponseDto';
import { TagDto } from 'src/app/model/TagDto';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {

  tags: Page<TagVO> = new Page<TagVO>();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router,
    private compiler: Compiler) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.http.post(environment.baseUrl + 'tags', {})
    .then(async (res: ResponseDto<TagDto>) => {
        this.tags.copy(res.data.list);
    })
    .catch(() => {
      console.log("error");
    });
  }

}
