import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';
import { PostVO } from './PostVO';
import { Tag } from './Tag';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TagVO extends Tag {
	constructor() { 
    super();
  }
  public post: PostVO;
}
