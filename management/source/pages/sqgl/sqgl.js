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
      title: '管理授权',
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
  xgxx(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "xiugaiyonghu") {
      wx.navigateTo({
        url: '/pages/xgyy/xgyy',
      })
    }
    if(name=="xiugaishouji"){
      wx.navigateTo({
        url: '/pages/xgsj/xgsj',
      })
    }
    if (name == "zengjiaxinxi") {
      wx.navigateTo({
        url: '/pages/zjxx/zjxx',
      })
    }


  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.xgxx = content.xgxx;
Page(body)