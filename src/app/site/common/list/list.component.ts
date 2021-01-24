import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../../../model/Page';
import { PostTagVO } from '../../../model/PostTagVO';
import { TagDetailOut } from '../../../model/TagDetailOut';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input()
  public allposts: Page<PostTagVO> = new Page<PostTagVO>();
  constructor() { }

  ngOnInit() {
  }

}
