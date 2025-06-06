import { Injectable } from '@angular/core';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';
import { Page } from './Page';
import { TagVO } from './TagVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TagDto extends ResponseData {

    list: Page<TagVO>;

}
