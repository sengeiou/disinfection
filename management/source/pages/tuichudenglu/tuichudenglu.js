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
      // title: '',
      title: '',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      show:"yy",
    })
  }
  onMyShow() {
    var that = this;
  }
  bindshow(e) {
    var type = e.currentTarget.dataset.type;
    console.log(type);
    if (type == "yy") {
      this.Base.setMyData({
        show: "yy"
      })
    }
    if (type == "yh") {
      this.Base.setMyData({
        show: "yh"
      })
    }
  }
  shouye(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "wjmm") {
      wx.navigateTo({
        url: '/pages/wjmm/wjmm',
      })
    }

    if (name == "dl") {
      wx.switchTab({
        url: '/pages/home/home',
      })
    }
    if (name == "zc") {
      wx.navigateTo({
        url: '/pages/cz/cz',
      })
    }

  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindshow = content.bindshow;
body.shouye = content.shouye;
Page(body)