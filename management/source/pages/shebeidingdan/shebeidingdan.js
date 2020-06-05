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
      title: '设备订单',
      data: {
        index: 0,
        multiIndex: [0, 0, 0],
        date: '2016-09-01',
        bindDateChange: function (e) {
          console.log('picker发送选择改变，携带值为', e.detail.value)
          this.setData({
            date: e.detail.value
          })
        }
      }
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var list=[
      { id: 1, no: "1264-4882-1145", time: "2020-02-01  19:25:55", shebei: "SN000001 星巴克KKONE店", money:'￥0.99'},
      { id: 2, no: "1264-4882-1146", time: "2020-02-02  19:25:55", shebei: "SN000002 星巴克KKONE店", money: '￥1.99' },
      { id: 3, no: "1264-4882-1147", time: "2020-02-03  19:25:55", shebei: "SN000003 星巴克KKONE店", money: '￥2.99' },
      { id: 4, no: "1264-4882-1145", time: "2020-02-04  19:25:55", shebei: "SN000004 星巴克KKONE店", money: '￥3.99' },
      { id: 5, no: "1264-4882-1149", time: "2020-02-05  19:25:55", shebei: "SN000005 星巴克KKONE店", money: '￥4.99' },
    ];
    this.Base.setMyData({ list })
  }
 
  onMyShow() {
    var that = this;
  }
  qjxz(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "qujianxuanze") {
      wx.navigateTo({
        url: '/pages/qjxz/qjxz',
      })
    }
    if (name == "qd") {
      wx.navigateTo({
        url: '/pages/ddxq/ddxq',
      })
    }



  }
}




var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.qjxz = content.qjxz;
Page(body)