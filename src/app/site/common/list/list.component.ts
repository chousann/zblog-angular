import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../../../model/Page';
import { PostTagVO } from '../../../model/PostTagVO';
import { TagDetailOut } from '../../../model/TagDetailOut';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public baseUrl: string = environment.baseUrl;
  
  @Input()
  public allposts: Page<PostTagVO> = new Page<PostTagVO>();
  constructor() { }

  ngOnInit() {
    
  }

}
