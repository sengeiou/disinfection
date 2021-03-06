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
    //  this.needauth = false;
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '首页',
      title: '首页',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      mobile: ""
    });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    var ownerapi= new OwnerApi();

  }
  adLoad(){
    console.log("广告加载成功")
  }
  adError(){
    console.log("广告加载失败",err)
  }
  adClose(){
    console.log("广告关闭")
  }
  wodeshanghu(e){
    var name = e.currentTarget.dataset.name;

    if (this.Base.getMyData().OwnerInfo.role == 'A') {
      wx.navigateTo({
        url: '/pages/wodeshanghutwo/wodeshanghutwo',
      })
    }else{
      wx.navigateTo({
        url: '/pages/wodeshanghu/wodeshanghu',
      })
    }
  
    
  }
  tixian(e){
      wx.navigateTo({
        url: '/pages/tixian/tixian',
      })
  }
  shebeitongji() {
    if(this.Base.getMyData().OwnerInfo.role=="A"){
      wx.navigateTo({
        url: '/pages/shebeitongji/shebeitongji',
      })
    }else{
      wx.navigateTo({
        url: '/pages/shebeitongjitwo/shebeitongjitwo',
      })
    }
     

  }
  dailihezuo(){
      if (this.Base.getMyData().OwnerInfo.role == "A") {
        wx.navigateTo({
          url: '/pages/dailihezuo/dailihezuo',
        })
      } else {
        wx.navigateTo({
          url: '/pages/dailihezuotwo/dailihezuotwo',
        })
      }
  }
  shebeidingdan(e){
    if (this.Base.getMyData().OwnerInfo.role == "A") {
      wx.navigateTo({
        url: '/pages/shebeidingdan/shebeidingdan',
      })
    } else {
      wx.navigateTo({
        url: '/pages/shebeidingdantwo/shebeidingdantwo',
      })
    }

  }
  fengchengguanli(){
      wx.navigateTo({
        url: '/pages/fengchengguanli/fengchengguanli',
      })
    }


  




}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.wodeshanghu=content.wodeshanghu;
body.tixian = content.tixian;
body.shebeitongji=content.shebeitongji;
body.shebeidingdan = content.shebeidingdan;
body.fengchengguanli = content.fengchengguanli;
body.dailihezuo = content.dailihezuo;
Page(body)