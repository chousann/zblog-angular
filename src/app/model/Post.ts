import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { PostAttribute } from './PostAttribute';
import { UserVO } from './UserVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Post {

	public id: string;

	public channelId: string;

	public title: string;

	public summary: string;

	public thumbnail: string;

	public tags: string;

	public authorId: string;

	public created: Date;

	public favors: string;

	public comments: string;

	public views: string;

	public status: string;

	public featured: string;

	public weight: string;
}
