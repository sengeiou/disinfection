// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from "../../apis/owner.api.js";
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
    var api = new OwnerApi;
    api.info({
    }, (info) => {
      // var amount = info.addtime;
      // console.log(info + "先看看")
      this.Base.setMyData({
      list:info
     })
      // console.log(amount + "先看看")
    })
  }
 
  wdsp(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "txcg") {
      wx.navigateTo({
        url: '/pages/tixianchenggong/tixianchenggong',
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