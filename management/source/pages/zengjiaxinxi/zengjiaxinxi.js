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
      title: '我的商户',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    ownerb_id: this.Base.options.owner_id
  }
  onMyShow() {
    var that = this;
    var api=new OwnerApi();
    api.canchoosedevicelist({
      // 
    },ret=>{
      console.log(ret,"llll")
      this.Base.setMyData({list:ret})
    })
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