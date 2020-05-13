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
      title: '申请提现',
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
      wdsp(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "tixianjilu") {
      wx.navigateTo({
        url: '/pages/txjl/txjl',
      })
    }
        if (name == "lijitixian") {
          wx.navigateTo({
            url: '/pages/ljtx/ljtx',
          })
        }



  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.wdsp = content.wdsp;
Page(body)