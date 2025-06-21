import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass']
})
export class PagerComponent implements OnInit, OnChanges {

  @Input("url")
  url: string;
  @Input("p")
  p: any;
  @Input("spans")
  spans: number;

  span: number;
  curl: string;

  pageNo: number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.p);
  }

  ngOnInit() {
    this.span = (this.spans - 3)/2;
    // this.curl = this.url.indexOf('?') != -1? this.url + "&pageNo=": this.url + "?pageNo=";
  }

}
