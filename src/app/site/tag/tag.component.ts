import { HttpClient } from '@angular/common/http';
import { Compiler, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ResponseDto } from '../../model/ResponseDto';
import { RootWebDto } from '../../model/RootWebDto';
import { TagDetailIn } from '../../model/TagDetailIn';
import { TagDetailOut } from '../../model/TagDetailOut';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';


@Component({
  standalone: false,
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.sass']
})
export class TagComponent implements OnInit {

  tagDetail: TagDetailOut = new TagDetailOut();
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router,
    private compiler: Compiler) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      var name = this.activatedRoute.snapshot.params['name'];
      this.getTags(name);
    });
  }

  getTags(name: string) {
    var tagIn: TagDetailIn = new TagDetailIn();
    tagIn.name = name;
    this.http.post(environment.baseUrl + 'tag', tagIn)
    .then(async (res: ResponseDto<TagDetailOut>) => {
      this.tagDetail.copy(res.data);
    })
    .catch(() => {
      console.log("error");
    });
  }

}
