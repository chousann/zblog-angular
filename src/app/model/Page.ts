import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { PostAttribute } from './PostAttribute';
import { PostVO } from './PostVO';
import { UserVO } from './UserVO';

export class Page<T> {
	constructor() {
		this.content = [];
	 }
	public content: T[];

	public number: number;

	public copy(data: Page<T>) {
		this.content = data.content;
		this.number = data.number;
	}
}
