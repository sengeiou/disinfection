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
      title: '修改信息',
    });
  }
  mobile(e) {
    this.Base.setMyData({
      mobile: e.detail.value
    })
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var api = new OwnerApi();
    api.info({}, (info) => {
      var mobile = info.mobile;
      this.Base.setMyData({
        mobile
      })
       console.log(info, "wode");
    });

  }
  querentianjia() {
    var mobile = this.Base.getMyData().mobile;
    var that = this;
    var api = new OwnerApi();
    api.add({
      name: this.Base.options.name,
      shopname: this.Base.options.shopname,
     shopaddress: this.Base.options.shopaddress,
      mobile: mobile
    }, (ret) => {
      // console.log(ret, 'ret')
      if (ret.code == "0") {
        wx.showToast({
          title: '已添加',
          icon: 'none'
        })
        console.log("wodeshanghutwo", '/pages/zengjiaxinxi/zengjiaxinxi?from=new&ownerb_id=' + ret.return)
        wx.navigateTo({
          url: '/pages/zengjiaxinxi/zengjiaxinxi?from=new&ownerb_id='+ret.return,
        })
      } else {
        wx.showToast({ 
          title: ret.return,
          icon: 'none'
        })
      }
    })
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.querentianjia = content.querentianjia;
body.mobile = content.mobile;
Page(body)