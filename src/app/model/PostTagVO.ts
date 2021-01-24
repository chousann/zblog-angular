import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';
import { PostTag } from './PostTag';
import { PostVO } from './PostVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PostTagVO extends PostTag {
	constructor() { 
    super();
    this.post = new PostVO();
  }
  public post: PostVO;

}
