import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProfileOut extends ResponseData {
	constructor() {
    super();
   }
  public data: any;
  public view: UserVO;
  public copy(data: ProfileOut) {
    this.data = data.data;
    this.view = data.view;
  }
}
