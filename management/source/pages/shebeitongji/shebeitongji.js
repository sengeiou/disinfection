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
      title: '设备统计',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var list=[
      {id:1,status:"未配置",no:'SN000016'},
      { id: 2, status: "未配置", no: 'SN000016' },
      { id: 3, status: "未配置", no: 'SN000016' },
      { id: 4, status: "未配置", no: 'SN000016' },
      { id: 5, status: "未配置", no: 'SN000016' },
      { id: 6, status: "未配置", no: 'SN000016' },
      { id: 7, status: "未配置", no: 'SN000016' },
      { id: 8, status: "未配置", no: 'SN000016' },
    ];
    this.Base.setMyData({list})
  }
  onMyShow() {
    var that = this;
  }
  sousuoshebei() {   
      wx.navigateTo({
        url: '/pages/sousuoshebei/sousuoshebei',
      })
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.sousuoshebei = content.sousuoshebei;
Page(body)