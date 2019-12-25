// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { MemberApi } from "../../apis/member.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '牛牛消毒',
    });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi;
    var memberapi = new MemberApi;

    memberapi.xuanxianglist({orderby:'r_main.seq'}, (xuanxianglist)=>{
      this.Base.setMyData({ xuanxianglist })

    })
  
    memberapi.zhengshu({},(zhengshu)=>{
      this.Base.setMyData({zhengshu})
    })
    
    instapi.indexbanner({orderby:'r_main.seq'}, (indexbanner)=>{
      this.Base.setMyData({indexbanner})
    })
    console.log(123123);
  }
  click(){
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
    })
  }
  xiaofei(){
    wx.navigateTo({
      url: '/pages/xiaofei/xiaofei',
    })
  }
  feeback(){
    wx.navigateTo({
      url: '/pages/feeback/feeback',
    })
  }
  kaishi(e){
    var type =e.currentTarget.id;
    console.log(e)

    this.base.setMyData({
      show:0
    })
  }

  preview(e){
    var src=e.currentTarget.dataset.src;
    var imgList=e.currentTarget.dataset.imgList;

    wx.previewImage({
             current: src, 
           urls: imgList 
    })
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow; 
body.click = content.click;
body.kaishi=content.kaishi;
body.xiaofei=content.xiaofei;
body.feeback=content.feeback;
body.preview = content.preview;
Page(body)