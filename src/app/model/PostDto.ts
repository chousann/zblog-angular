import { Injectable } from '@angular/core';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';
import { Page } from './Page';
import { PostVO } from './PostVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PostDto extends ResponseData {

    postList!: Page<PostVO>;

}
