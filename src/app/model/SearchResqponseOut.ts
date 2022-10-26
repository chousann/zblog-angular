import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { DocVo } from './DocVo';
import { PostAttribute } from './PostAttribute';
import { PostVO } from './PostVO';
import { UserVO } from './UserVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SearchResqponseOut {

	public docList: PostVO[];

	public copy(data: SearchResqponseOut) {
		this.docList = data.docList;
	}
}
