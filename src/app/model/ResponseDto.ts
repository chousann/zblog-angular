import { Injectable } from '@angular/core';
import { ResponseCommon } from './ResponseCommon';
import { ResponseData } from './ResponseData';

export class ResponseDto<T extends ResponseData> {
    constructor() {
    }
    public common: ResponseCommon;
	
    public data!: T;

    public copy(dto: ResponseDto<T>) {
    }
}
