import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { PostAttribute } from './PostAttribute';
import { PostVO } from './PostVO';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class EditingOut extends ResponseData {

	public editor!: string;

	public editing!: string;

	public channels!: Array<Channel>;

	public view!: PostVO;
}
