import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ResponseDto } from '../../model/ResponseDto';
import { RootWebDto } from '../../model/RootWebDto';
import { SearchResqponseOut } from '../../model/SearchResqponseOut';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';


@Component({
  standalone: false,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent  implements OnInit, OnChanges {
  queryString: string;
  public searchRes: SearchResqponseOut = new SearchResqponseOut();
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public rootWebDto: RootWebDto,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.queryString = this.activatedRoute.snapshot.params['queryString'];
      this.search();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.search();
  }

  search() {
    this.http.post(environment.baseUrl + 'search/init/' + this.queryString, {})
      .then(async (res: ResponseDto<SearchResqponseOut>) => {
        var data = res.data;
        if (data) {
          this.searchRes.copy(data);
        }
      })
      .catch(() => {
        console.log("error");
      });
  }

  public sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
}
