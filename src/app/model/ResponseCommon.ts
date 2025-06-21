import { Injectable } from '@angular/core';

export class ResponseCommon {
    constructor() {
    }

    public statusCode!: number;

    public errorMsg!: Map<String, String>;

    public copy(common: ResponseCommon) {
    }
}
