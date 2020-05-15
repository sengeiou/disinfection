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
      title: '我的商户',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var list=[
      { id: 2, name: '设备编号', check: false},
      { id: 3, name: '设备编号', check: false},
      { id: 4, name: '设备编号', check: false},
      { id: 5, name: '设备编号', check: false},
      { id: 6, name: '设备编号', check: false},
      { id: 7, name: '设备编号', check: false},
    ];
    this.Base.setMyData({list})
  }
  onMyShow() {
    var that = this;
  }
  wdsh(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "wdshson") {
      wx.navigateTo({
        url: '/pages/wdshson/wdshson',
      })
    }


  }
  dianji(e){
    var id = e.currentTarget.id;
    console.log(id);
    var list=this.Base.getMyData().list;
    list[id].check = !list[id].check;
    this.Base.setMyData({list})
  }
}





var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.wdsh = content.wdsh;
body.dianji = content.dianji;
Page(body)