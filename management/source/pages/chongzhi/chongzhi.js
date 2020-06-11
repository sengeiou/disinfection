// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { AliyunApi } from "../../apis/aliyun.api.js";
import { OwnerApi } from "../../apis/owner.api.js";
class Content extends AppBase {
  constructor() {
    super();
    this.needauth = false;
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
  password(e){
    this.Base.setMyData({
      password:e.detail.value
    })
  }
  szmm() {
  var password=this.Base.getMyData().password;
  var api=new OwnerApi();
  console.log(password.length+"我的")
    api.activeaccount({
      password:password,
    },(ret)=>{
      if (password.length > 6 || password.length < 5){
        wx.showToast({
          title: '密码长度不对，长度应为6位',
          icon: 'none'
        })
        return;
      }
      if (ret.code == "0") {
        wx.switchTab({
          url: '/pages/home/home'
        })
      }
    })
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.szmm = content.szmm;
body.password=content.password;
Page(body)