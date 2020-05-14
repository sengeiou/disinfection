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
    var list = [
      { id: 1, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 2, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 3, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 4, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 5, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 6, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 7, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 8, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
      { id: 9, no: "SN000001", local: "星巴克KKONE店", fin: "3500", money: "5200" },
    ];
    this.Base.setMyData({ list })
  }
  onMyShow() {
    var that = this;
  }
  sou(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "ss") {
      wx.navigateTo({
        url: '/pages/sbtjson/sbtjson',
      })
    }



  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.sou = content.sou;
Page(body)