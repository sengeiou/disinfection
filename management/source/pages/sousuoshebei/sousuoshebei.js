// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from "../../apis/owner.api.js"
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
    this.Base.setMyData({name:this.Base.options.name})
  }

  onMyShow(e) {
    var that = this;
    var api = new OwnerApi();
    api.devicesummary({
      name:this.Base.getMyData().name
    }, ret => {
      // console.log(name)
      this.Base.setMyData({ list: ret })
   
    })
  }
  searchtxt(e) {
    this.Base.setMyData({
      name: e.detail.value
    })
  }
  tijiao(){
    this.onMyShow();
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.searchtxt = content.searchtxt;
body.tijiao=content.tijiao;
Page(body)