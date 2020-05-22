// pages/content/content.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
import {
  ApiUtil
} from "../../apis/apiutil";
import {
  MemberApi
} from "../../apis/member.api.js";
import {
  OwnerApi
} from "../../apis/owner.api.js";
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
    var api = new OwnerApi();
    api.canchoosedevicelist({
      // 
    }, (ret => {
      // console.log(item.id, "llll")
      this.Base.setMyData({
        list: ret
      })
    }))
  }

    zengjiaxinxi() {
      wx.navigateTo({
        url: '/pages/wdshson/wdshson',
      })


    }

 querentianjia(e) {
    var api = new OwnerApi();
    api.binddevice({
    }, (ret) => {
      this.Base.options({list:ret})
    })
  }
}
 




  var content = new Content();
  var body = content.generateBodyJson();
  body.onLoad = content.onLoad;
  body.onMyShow = content.onMyShow;
  body.zengjiaxinxi = content.zengjiaxinxi;
  body.querentianjia = content.querentianjia;
  Page(body)