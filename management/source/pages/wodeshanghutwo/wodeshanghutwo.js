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
   // this.Base.setMyData({ iiikkkmkmk:"sdrkfpsldkfl;sdkr;fpl"})
  
  }
  onMyShow() { 
    var that = this;
    var api=new OwnerApi();
    api.childlist({
    },(ret=>{
      console.log(ret,"看看");
        this.Base.setMyData({list: ret})
    }))
    
  }
  glsq(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name;
    var id=e.currentTarget.id;
    // return
    if (name == "guanlishouquan") {
      wx.navigateTo({
        url: '/pages/shanghuguanli/shanghuguanli?owner_id='+id,
      })
    }
    if (name == "tianjiashanghu") { 
      wx.navigateTo({
        url: '/pages/tianjiashanghu/tianjiashanghu',
      })
    }
  } 
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.glsq = content.glsq;
Page(body)