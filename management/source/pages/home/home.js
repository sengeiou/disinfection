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
    //  this.needauth = false;
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '首页',
      title: '首页',
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
    var ownerapi= new OwnerApi();

  }
  wodeshanghu(e){
    var name = e.currentTarget.dataset.name;

    if (this.Base.getMyData().OwnerInfo.role == 'A') {
      wx.navigateTo({
        url: '/pages/wodeshanghutwo/wodeshanghutwo',
      })
    }else{
      wx.navigateTo({
        url: '/pages/wodeshanghu/wodeshanghu',
      })
    }
  
    
  }
  tixian(e){
    var name = e.currentTarget.dataset.name;
    if (name == "shouyetixian") {
      wx.navigateTo({
        url: '/pages/tixian/tixian',
      })
    }
  }
  shebeitongji(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "shebeitongji") {
      wx.navigateTo({
        url: '/pages/sbtj/sbtj',
      })
    }
  }
  shebeidingdan(e){
    if (name == "shebeidingdan") {
      wx.navigateTo({
        url: '/pages/sbdd/sbdd',
      })
    }
    if (name == "fengchengguanli") {
      wx.navigateTo({
        url: '/pages/fcgl/fcgl',
      })
    }

  }
  




}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.wodeshanghu=content.wodeshanghu;
body.tixian = content.tixian;
Page(body)