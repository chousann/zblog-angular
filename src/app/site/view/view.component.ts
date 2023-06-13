import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Compiler, Component, ComponentFactory, ElementRef, NgModule, NgZone, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpclientService } from '../../service/httpclient/httpclient.service';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { PostVO } from '../../model/PostVO';
import { RootWebDto } from '../../model/RootWebDto';
import Vditor from 'vditor'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit, AfterViewInit  {

  // @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
  public baseUrl: string = environment.baseUrl;
  @ViewChild("vditorPreview")
  public priview: ElementRef;

  @ViewChild('topic') topic: ElementRef;

  id: string;
  public view: PostVO = new PostVO();
  constructor(private http: HttpClient,
    private localstorage: LocalstorageService,
    private activatedRoute: ActivatedRoute,
    private rootWebDto: RootWebDto,
    private zone: NgZone,
    private router: Router,
    private clientService: HttpclientService,
    private compiler: Compiler) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
        this.id = this.activatedRoute.snapshot.params['id'];
        this.getPostDetail();
      });
  }

  ngAfterViewInit() {
    if(this.topic.nativeElement.style.height <= 700) {
      this.fulltext();
    }
  }

  getPostDetail() {
    this.clientService.post(environment.baseUrl + 'post', {id: this.id})
    .then(async (data: PostVO) => {
        console.log(data);
        this.view.copy(data);
        this.view.title = data.title;
        this.view.author = data.author;
        this.view.views = data.views;
        // this.content.createComponent(this.create(data.content));
         document.getElementsByClassName("markdown-body")[0].innerHTML = data.content;
        //Vditor.preview(this.priview.nativeElement, data.content);
        // this.content.element.nativeElement.innerHtml = data.content
        this.view.content = data.content;
        this.view.tags = data.tags;
        this.view.tags = data.tags;
        console.log(this.view);
    })
    .catch(() => {
      console.log("error");
    });
  }

  fulltext() {
    this.topic.nativeElement.classList.add('fulltext');
  }


  create(templateString: string): ComponentFactory<any> {

    @Component({
      selector: 'dynamic-component',
      template: templateString
    })
    class Dy implements OnInit {
      constructor() {

      }
      ngOnInit() {
      }
    }

    @NgModule({
      declarations: [
        Dy
      ]
    })
    class DyModule { }

    return this.compiler.compileModuleAndAllComponentsSync(DyModule)
      .componentFactories.find(x => x.componentType ===Dy)
  }

}
