import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { Post } from './Post';
import { PostAttribute } from './PostAttribute';
import { UserVO } from './UserVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DocVo {
	constructor() {
	 }
	 public id: string;
	 public title: string;
	 public summy:string;

	public copy(p: DocVo) {
		this.id = p.id;
		this.title = p.title;
		this.summy = p.summy;
	}
}
