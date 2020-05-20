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
      title: '',
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
  name(e){
    this.Base.setMyData({
      name:e.detail.value
    })
  }
  shopname(e) {
    this.Base.setMyData({
      shopname: e.detail.value
    })
  }
  shopaddress(e) {
    this.Base.setMyData({
      shopaddress: e.detail.value
    })
  }
  querentianjia(e) {
     var name=this.Base.getMyData().name;
     var shopname=this.Base.getMyData().shopname;
    var shopaddress= this.Base.getMyData().shopaddress;
      wx.navigateTo({
        url: '/pages/xiugaixinxitwo/xiugaixinxitwo?name=' +name+'&shopname='+shopname+'&shopaddress='+shopaddress+'',
      })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.querentianjia = content.querentianjia;
body.name=content.name;
body.shopname=content.shopname;
body.shopaddress=content.shopaddress;
Page(body)