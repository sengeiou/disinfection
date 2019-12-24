// pages/aboutus/aboutus.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
var WxParse = require('../../wxParse/wxParse');
class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi;
    instapi.aboutus({}, (aboutus)=>{
      // for(var i=0;i<wendang.length;i++){
      //   WxParse.wxParse('content', 'html', wendang[i].content, that, 10);
      // }
     console.log(aboutus)
      this.Base.setMyData({
        aboutus
      });
    });
}

  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '关于我们',
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)