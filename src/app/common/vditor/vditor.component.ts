import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Vditor from 'vditor'

@Component({
  selector: 'app-vditor',
  templateUrl: './vditor.component.html',
  styleUrls: ['./vditor.component.sass']
})
export class VditorComponent implements OnInit {
  value = '# Title';
  constructor() { }

  public vditor: Vditor; 
  // File:[];
  ngOnInit(): void {
    this.vditor = new Vditor('vditor', {
      height: "auto",
      /** 编辑器最小高度 */
      minHeight: 200,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after: () => { 
        // this.vditor.setValue('Hello, Vditor + Angular!');
        //this.vditor.setValue('<p><img src="https://jinqiaooss.oss-cn-beijing.aliyuncs.com/bxshop/2020-08-05/5f2a21b0470f5.jpg" alt="001.jpg" /><br /><img src="https://jinqiaooss.oss-cn-beijing.aliyuncs.com/bxshop/2020-08-05/5f2a21b07cb7b.jpg" alt="002.jpg" /></p>');
      },
      //toolbar:[],
      upload:{
        url:environment.baseUrl + "post/upload",
        linkToImgUrl:environment.baseUrl + "post/upload",
        fieldName:"file",
        max:1048576,
        format:(File,msg)=>{
          // console.log("============格式化拿到的数据信息File============");
          let customObj={};
          let dealData=JSON.parse(msg);
          for(let i=0;i<File.length;i++){
            // console.log(File[i]['name']);
            customObj[File[i]['name']]=environment.baseUrl + dealData[i]['path'];
          }
          let cusObj={  
            "msg": "",  
            "code": 0,  
            "data": {  
            // "errFiles": ['filename', 'filename2'],  
            "succMap": customObj  
            }  
           }
          return JSON.stringify(cusObj);
        },
        error:(res)=>{
          console.log("============上传失败返回的数据信息============");
          console.log(res);
        },
        linkToImgCallback:(responseText)=>{
          console.log("============图片地址上传的回调数据============");
          console.log(responseText);
        }
      }
    });
    
  }
  getEditorValue(): any{
    console.log("============获取编辑器内容============");
    console.log(this.vditor.getValue());
    console.log("============获取编辑器Html内容============");
    console.log(this.vditor.getHTML());

    return this.vditor.getValue();
  }

  setEditorValue(content: any){

    this.vditor.setValue(content);
    console.log("============获取编辑器内容============");
    console.log(this.vditor.getValue());
    console.log("============获取编辑器Html内容============");
    console.log(this.vditor.getHTML());
  }

}
