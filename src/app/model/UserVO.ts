import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserVO {
	public editor: string;
	public id: string;
	public username: string;

	public password: string;
	public avatar: string;
	public name: string;
	
	public email: string;

	public posts: string; // 文章数
	public comments: string; // 发布评论数

	public created: Date;
	public lastLogin: Date;
	public signature: string; // 个性签名

	public status: string;
}
