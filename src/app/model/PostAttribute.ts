import { Injectable } from '@angular/core';
import { UserVO } from './UserVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PostAttribute {

    public id: string;

    public editor: string;

    public content: string; // 内容
}
