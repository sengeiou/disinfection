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
    var list=[
      {id:1,name:"设备编号",no:"SN000004"},
      { id: 1, name: "设备编号"},
      { id: 2, name: "设备编号"},
      { id: 3, name: "设备编号"},
      { id: 4, name: "设备编号"},
      { id: 5, name: "设备编号"},
      { id: 6, name: "设备编号"},
      { id: 7, name: "设备编号"},
      { id: 8, name: "设备编号"},
      { id: 9, name: "设备编号"},
      { id:10, name: "设备编号"},
    ];
    this.Base.setMyData({ list })
  }
  onMyShow() {
    var that = this;
  }
  xgxx(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "xiugaiyonghu") {
      wx.navigateTo({
        url: '/pages/xiugaiyonghuxinxi/xiugaiyonghuxinxi',
      })
    }
    if(name=="xiugaishouji"){
      wx.navigateTo({
        url: '/pages/xiugaixinxi/xiugaixinxi',
      })
    }
    if (name == "zengjiaxinxi") {
      wx.navigateTo({
        url: '/pages/zengjiaxinxi/zengjiaxinxi',
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