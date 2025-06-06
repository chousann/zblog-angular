import { Injectable } from '@angular/core';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';
import { Page } from './Page';
import { PostVO } from './PostVO';
import { UploadResult } from './UploadResult';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UploadDto extends ResponseData {

  uploadList: UploadResult[];
}
