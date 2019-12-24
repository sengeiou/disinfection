// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { MemberApi } from "../../apis/member.api.js";
import { OrderApi } from "../../apis/order.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '历史订单',
    });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi;
    var memberapi = new MemberApi;
    var api = new OrderApi();
    api.myorder({ orderstatus: 'B' }, (myorder) => {
  

       this.Base.setMyData({myorder});
      console.log(myorder);


    })
  }
  
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)