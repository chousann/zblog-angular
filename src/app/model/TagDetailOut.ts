import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';
import { Page } from './Page';
import { PostTagVO } from './PostTagVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TagDetailOut {
	constructor() {
    this.results = new Page<PostTagVO>();
   }
  public results: Page<PostTagVO>;
  public name: string;
  public copy(data: TagDetailOut){
    this.results = data.results;
    this.name = data.name;
  }
}
