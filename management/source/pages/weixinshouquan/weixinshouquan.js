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
      // title: '我的',
      title: '我的',
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
  todetails(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "zaixiankefu") {
      wx.navigateTo({
        url: '/pages/zaixiankefu/zaixiankefu',
      })
    }

    if (name == "wentifankui") {
      wx.navigateTo({
        url: '/pages/wentifankui/wentifankui',
      })
    }
    if (name == "guanyuwomen") {
      wx.navigateTo({
        url: '/pages/guanyuwomen/guanyuwomen',
      })
    }
    if (name == "tuichudenglu") {
      wx.navigateTo({
        url: '/pages/tuichudenglu/tuichudenglu',
      })
    }

  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.todetails = content.todetails;
Page(body)