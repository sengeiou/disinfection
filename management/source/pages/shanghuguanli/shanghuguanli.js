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
      { id: 1, name: "设备编号", no: "SN000001" },
      { id: 2, name: "设备编号", no: "SN000002" },
      { id: 3, name: "设备编号", no: "SN000003" },
      { id: 4, name: "设备编号", no: "SN000004" },
      { id: 5, name: "设备编号", no: "SN000005" },
      { id: 6, name: "设备编号", no: "SN000006" },
      { id: 7, name: "设备编号", no: "SN000007" },
      { id: 8, name: "设备编号", no: "SN000008" },
      { id: 9, name: "设备编号", no: "SN000009" },
      { id: 10, name: "设备编号", no: "SN0000010" },
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
        url: '/pages/xgyy/xgyy',
      })
    }
    if(name=="xiugaishouji"){
      wx.navigateTo({
        url: '/pages/xgsj/xgsj',
      })
    }
    if (name == "zengjiaxinxi") {
      wx.navigateTo({
        url: '/pages/zjxx/zjxx',
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