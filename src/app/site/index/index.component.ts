import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../service/localstorage/localstorage.service';
import { AccountProfile } from '../../model/AccountProfile';
import { ContentsIn } from '../../model/ContentsIn';
import { Page } from '../../model/Page';
import { PostVO } from '../../model/PostVO';
import { RootWebDto } from '../../model/RootWebDto';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
import { ResponseDto } from 'src/app/model/ResponseDto';
import { PostDto } from 'src/app/model/PostDto';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
