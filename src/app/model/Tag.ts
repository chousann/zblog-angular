import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Tag {
	constructor() { }
  public id!: number;

  /**
   * 标签名称
   */
  public name!: string;

  /**
   * 预览图
   */
  public thumbnail!: string;

  /**
   * 描述
   */
  public description!: string;

  /**
   * 最后发表的文章Id
   */
  public latestPostId!: number;

  public created!: Date;

  public updated!: Date;

  /**
   * 标签下的文章数
   */
  public posts!: number;
}
