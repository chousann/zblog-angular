import { Compiler, Component, ComponentFactory, NgModule, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AdminOut } from '../../../model/AdminOut';
import { RootWebDto } from '../../../model/RootWebDto';
import { environment } from '../../../../environments/environment';
import { HttpclientService } from '../../../service/httpclient/httpclient.service';
@Component({
  standalone: false,
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.sass']
})
export class AdminlayoutComponent implements OnInit {

  public baseUrl: string = environment.baseUrl;
  
  template: string[] = [
      'link,assets/dist/vendors/font-awesome/css/font-awesome.min.css',
      'link,assets/admin/dist/css/site.css',
      'link,assets/admin/dist/css/site.addons.css',
      'link,assets/admin/dist/css/skins/skin-blue.css',
      'script,assets/dist/js/plugins.js',
      'script,assets/dist/vendors/jquery-validation/jquery.validate.min.js',
      'script,assets/dist/vendors/jquery-validation/additional-methods.js',
      'script,assets/dist/vendors/jquery-validation/localization/messages_zh.min.js',
      'script,assets/dist/vendors/layer/layer.js',
      'script,assets/admin/dist/js/site.js',
      'script,assets/admin/dist/js/site.base.js'
]

  public adminOut: AdminOut;
  @ViewChild('head', { read: ViewContainerRef }) head: ViewContainerRef;
  
  constructor(public rootWebDto: RootWebDto,
    private compiler: Compiler,
    private http: HttpclientService) { }

  ngOnInit() {
    if (this.rootWebDto.flag === "admin") {
      return;
    }
    var head: HTMLHeadElement = document.getElementsByTagName("head")[0];
    var ls: HTMLCollectionOf<Element> = head.getElementsByClassName("site");
    for(var i = 0; i < ls.length; i++) {
      ls[i].remove();
    }
    this.loadScript(head);
    this.rootWebDto.flag = "admin";
  }

  loadScript(head: HTMLHeadElement) {
    for (var i = 0; i < this.template.length; i++) {
      var arr: string[]  = this.template[i].split(",");
      if (arr[0] === "link") {
        var link = document.createElement("link");
        link.href = arr[1];
        link.rel = "stylesheet";
        link.setAttribute("class", "admin");
        head.appendChild(link);
      } else if(arr[0] === "script") {
        var script = document.createElement("script");
        script.src = arr[1];
        script.setAttribute("class", "admin");
        head.appendChild(script);
      } else if(arr[0] === "innerscript") {
        var script = document.createElement("script");
        script.setAttribute("class", "admin");
        script.appendChild(document.createTextNode(arr[1]));
        head.appendChild(script);
      }
    }
  }

  logout() {
    this.http.logout();
  }
}
