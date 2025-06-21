import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-pagelink',
  templateUrl: './pagelink.component.html',
  styleUrls: ['./pagelink.component.sass']
})
export class PagelinkComponent implements OnInit {

  @Input("pageNo")
  pageNo: number;
  @Input("idx")
  idx: number;
  @Input("url")
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
