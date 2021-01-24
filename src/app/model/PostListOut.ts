import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { Page } from './Page';
import { PostVO } from './PostVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PostListOut {

	constructor() {
		this.page = new Page<PostVO>();
	 }
	public page: Page<PostVO>;
	public title: string;
	public id: string;
	public channelId: string;
	public channels: Channel[];
	public copy(data: any) {

		this.page = data.page;
		this.title = data.title;
		this.id = data.id;
		this.channelId = data.channelId;
		this.channels = data.channels;
	}
}
