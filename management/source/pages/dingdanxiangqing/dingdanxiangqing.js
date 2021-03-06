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
      title: '设备订单',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
  }
  qjxz(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "qujianxuanze") {
      wx.navigateTo({
        url: '/pages/qjxz/qjxz',
      })
    }
    if (name == "qd") {
      wx.navigateTo({
        url: '/pages/ddxq/ddxq',
      })
    }



  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.qjxz = content.qjxz;
Page(body)