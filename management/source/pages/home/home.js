// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '首页',
      title: '首页',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      mobile: ""
    });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
  }
  wdsh(e){
    var name = e.currentTarget.dataset.name;
    if (name == "wodeshanghu") {
      wx.navigateTo({
        url: '/pages/wdsh/wdsh',
      })
    }
    if (name == "shebeitongji") {
      wx.navigateTo({
        url: '/pages/sbtj/sbtj',
      })
    }
    if (name == "shebeidingdan") {
      wx.navigateTo({
        url: '/pages/sbdd/sbdd',
      })
    }
    if (name == "fengchengguanli") {
      wx.navigateTo({
        url: '/pages/fcgl/fcgl',
      })
    }
    if (name == "dailihezuo") {
      wx.navigateTo({
        url: '/pages/dlhz/dlhz',
      })
    }


  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.wdsh=content.wdsh;
Page(body)