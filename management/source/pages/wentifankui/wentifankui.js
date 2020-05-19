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
      // title: 'wentifankui',
      title: '问题反馈',
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
  nr(e){
    this.Base.setMyData({
      content:e.detail.value
    })
  }
  yijian(e) {
    var that=this;
    var content=this.Base.getMyData().content;
    var api=new OwnerApi();
    api.feedback({
        content:content
    }, (res) => {
      wx.showToast({
        title: '已保存',
        icon: 'none'
      })
      wx.navigateBack({
      })

    })
  }

}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.yijian=content.yijian;
body.nr=content.nr;
Page(body)