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
      title: '我的商户',
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
  glsq(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "guanlishouquan") {
      wx.navigateTo({
        url: '/pages/sqgl/sqgl',
      })
    }
    if (name == "tianjiashanghu") {
      wx.navigateTo({
        url: '/pages/tjshson/tjshson',
      })
    }


  }
  
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.glsq = content.glsq;
Page(body)