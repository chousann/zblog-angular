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
export class PostVO extends Post {
	constructor() {
		super();
		this.author = new UserVO();
		this.channel = new Channel();
		this.attribute = new PostAttribute();
	 }
	public editor!: string;
	public content!: string;

	public author: UserVO;
	public channel: Channel;
	
	public attribute: PostAttribute;

	public getTagsArray(): string[] {
		if(this.tags) {
			return this.tags.split(",");
		}

		return [];
	}

	public copy(p: PostVO) {
		this.editor = p.editor;
		this.content = p.content;
		this.author = p.author;
		this.channel = p.channel;
		this.attribute = p.attribute;
	}
}
