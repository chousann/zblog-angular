import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UploadResult {
	constructor() { }
  /**
   * 上传状态
   */
  public status: number;

  /**
   * 提示文字
   */
  public message: string;

  /**
   * 文件名
   */
  public name: string;

  /**
   * 文件大小
   */
  public size: number;

  /**
   * 文件存放路径
   */
  public path: string;
}
