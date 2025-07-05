import { Component, OnInit } from '@angular/core';
import ModelClient, { isUnexpected } from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';
import Vditor from 'vditor';
import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


@Component({
  selector: 'app-ai',
  standalone: false,
  templateUrl: './ai.html',
  styleUrl: './ai.scss'
})
export class Ai implements OnInit {

  public msgList: Array<{ type: string, content: string }> = new Array();
  public msg: string = "";

  public token: string = "";
  public endpoint: string = "https://models.github.ai/inference";
  public model: string = "openai/gpt-4.1";
  client: any;
  vditor: Vditor;
  constructor(
  ) {

  }
  ngOnInit(): void {
    this.vditor = new Vditor('vditor', {
      height: "auto",
      /** 编辑器最小高度 */
      minHeight: 200,
      fullscreen: {
        index: 10000
      },
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
      upload: {
        url: "",
        linkToImgUrl: "",
        fieldName: "file",
        max: 1048576,
        format: (File, msg) => {
          // console.log("============格式化拿到的数据信息File============");
          let customObj = {};
          var res = JSON.parse(msg);
          let dealData = res.data.uploadList;
          for (let i = 0; i < File.length; i++) {
            // console.log(File[i]['name']);
            customObj[File[i]['name']] = dealData[i]['path'];
          }
          let cusObj = {
            "msg": "",
            "code": 0,
            "data": {
              // "errFiles": ['filename', 'filename2'],  
              "succMap": customObj
            }
          }
          return JSON.stringify(cusObj);
        },
        error: (res) => {
          console.log("============上传失败返回的数据信息============");
          console.log(res);
        },
        linkToImgCallback: (responseText) => {
          console.log("============图片地址上传的回调数据============");
          console.log(responseText);
        }
      },
      preview: {
        markdown: {
          linkPrefix: "",
        }
      }
    });
    this.three();
  }

  connect() {
    this.client = ModelClient(
      this.endpoint,
      new AzureKeyCredential(this.token),
    );
  }

  async click() {
    await this.send(this.msg);
  }

  async send(msg: string) {
    this.msgList.push({
      type: "q",
      content: msg
    });
    this.msg = "";
    const response = await this.client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "user", content: msg }
        ],
        temperature: 1.0,
        top_p: 1.0,
        model: this.model
      }
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }


    for (const choice of response.body.choices) {
      console.log(choice.message.content);
      this.msgList.push({
        type: "a",
        content: choice.message.content
      });
    }

  }

  mdToHtml(text: string) {

    this.vditor.setValue(text);

    var ret = this.vditor.getHTML();
    return ret;
  }

  three() {

    
    // three js 文档
    // https://threejs.org/manual/
    // 安装
    // https://threejs.org/manual/#en/installation
    // 加载3D模型
    // https://threejs.org/manual/#en/loading-3d-models
    // example
    // https://github.com/mrdoob/three.js/tree/master/examples
    // 演示demo
    // https://threejs.org/examples/
    
    let mixer;

    const clock = new THREE.Clock();
    const container = document.getElementById('container');

    const stats = new Stats();
    container.appendChild(stats.dom);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('assets/threejs/daco/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load('assets/threejs/LittlestTokyo.glb', function (gltf) {

      const model = gltf.scene;
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();

      renderer.setAnimationLoop(animate);

    }, undefined, function (e) {

      console.error(e);

    });


    window.onresize = function () {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    };


    function animate() {

      const delta = clock.getDelta();

      mixer.update(delta);

      controls.update();

      stats.update();

      renderer.render(scene, camera);

    }

  }

}
