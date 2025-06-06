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
export class UserInfoOut extends ResponseData {
	constructor() {
    super();
    this.user = new UserVO();
   }
  public user: UserVO;
	public owner: boolean;
  public pageNo: number;
  
  public copy(data: UserInfoOut) {
    this.user = data.user;
    this.owner = data.owner;
    this.pageNo = data.pageNo;
  }
}
