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
      // title: '在线客服',
      title: '分成管理',
      data:{
        isDown:false,
        percent:40,
      },
      
      startDown: function (e) {
        this.setData({
          isDown: true,
          percent: 100,
        })
      },
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var pageData = {}
    for (var i = 1; i < 5; ++i) {
      (function (index) {
        pageData[`slider${index}change`] = function (e) {
          console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
        }
      })(i);
    }
    Page(pageData)
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)