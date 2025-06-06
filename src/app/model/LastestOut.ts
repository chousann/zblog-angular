import { Injectable } from '@angular/core';
import { CommentVO } from './CommentVO';
import { PostVO } from './PostVO';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LastestOut extends ResponseData {

	public latest_posts: PostVO[];
	public hottest_posts: PostVO[];
	public latest_comments: CommentVO[];

	public copy(data: LastestOut) {
		this.latest_posts = data.latest_posts;
		this.hottest_posts = data.hottest_posts;
		this.latest_comments = data.latest_comments;
	}
}
