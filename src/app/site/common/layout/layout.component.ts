import { Component, OnInit } from '@angular/core';
import { RootWebDto } from '../../../model/RootWebDto';

@Component({
  standalone: false,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  template: string[] = [
    // 'link,assets/dist/vendors/pace/themes/pace-theme-minimal.css',
  // 'link,assets/dist/css/plugins.css',
  'link,assets/site/css/style.css',
  'link,assets/dist/vendors/simple-line-icons/css/simple-line-icons.css',
  'link,assets/dist/vendors/font-awesome/css/font-awesome.min.css',
  // 'script,assets/dist/vendors/pace/pace.min.js',
  // 'script,assets/dist/vendors/layer/layer.js',
]
  constructor(public rootWebDto: RootWebDto) { }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

  ngOnInit() {
    if (this.rootWebDto.flag === "site") {
      return;
    }
    var head: HTMLHeadElement = document.getElementsByTagName("head")[0];
    var ls: HTMLCollectionOf<Element> = head.getElementsByClassName("admin");
    for(var i = 0; i < ls.length; i++) {
      ls[i].remove();
    }
    this.loadScript(head);
    this.rootWebDto.flag = "site";
  }

  loadScript(head: HTMLHeadElement) {
    for (var i = 0; i < this.template.length; i++) {
      var arr: string[]  = this.template[i].split(",");
      if (arr[0] === "link") {
        var link = document.createElement("link");
        link.href = arr[1];
        link.rel = "stylesheet";
        link.setAttribute("class", "site");
        head.appendChild(link);
      } else if(arr[0] === "script") {
        var script = document.createElement("script");
        script.src = arr[1];
        script.setAttribute("class", "site");
        head.appendChild(script);
      } else if(arr[0] === "innerscript") {
        var script = document.createElement("script");
        script.setAttribute("class", "site");
        script.appendChild(document.createTextNode(arr[1]));
        head.appendChild(script);
      }
    }
  }

}
