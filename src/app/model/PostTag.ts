import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PostTag {
	constructor() { }
  public id: number;

  public postId: number;

  public tagId: number;

  public weight: number;

}
