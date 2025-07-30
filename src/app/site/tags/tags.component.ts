import { HttpClient } from '@angular/common/http';
import { Compiler, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Page } from '../../model/Page';
import { ResponseDto } from '../../model/ResponseDto';
import { RootWebDto } from '../../model/RootWebDto';
import { TagDto } from '../../model/TagDto';
import { TagVO } from '../../model/TagVO';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';


@Component({
  standalone: false,
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {

  tags: Page<TagVO> = new Page<TagVO>();
  loading: boolean = false;
  
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
    this.loading = true;
    
    this.http.post(environment.baseUrl + 'tags', {})
    .then(async (res: ResponseDto<TagDto>) => {
        this.tags.copy(res.data.list);
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      this.loading = false;
    });
  }

}