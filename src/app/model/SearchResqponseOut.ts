import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { DocVo } from './DocVo';
import { PostAttribute } from './PostAttribute';
import { PostVO } from './PostVO';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SearchResqponseOut extends ResponseData {

	public docList: PostVO[];

	public copy(data: SearchResqponseOut) {
		this.docList = data.docList;
	}
}
