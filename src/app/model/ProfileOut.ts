import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';
import { UserVO } from './UserVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProfileOut {
	constructor() { }
  public data: any;
  public view: UserVO;
  public copy(data: ProfileOut) {
    this.data = data.data;
    this.view = data.view;
  }
}
