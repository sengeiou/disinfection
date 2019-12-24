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
      title: '意见反馈',
    });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi;
    var memberapi = new MemberApi;

    memberapi.fankui({}, (fankui) => {
      this.Base.setMyData({ fankui })
    })
  }
  click(){
    var qsaaa=this.Base.getMyData().inputvalue;
    var ssss=this.Base.getMyData().lxfs;
     
    if(qsaaa == ''||qsaaa==undefined){
      console.log('为空')
      this.Base.toast('请填写问题描述')
      return;
    } 


    console.log(qsaaa)
    console.log(ssss)
  }
  shuru(e){
    this.Base.setMyData({
      inputvalue:e.detail.value
    })

    if (this.Base.getMyData().inputvalue == '') {
        console.log(123)
       
    }else{
      console.log(2345)
    }

    console.log(e)
  }
  lxfs(e){
    this.Base.setMyData({
      lxfs:e.detail.value
    })
    if(this.Base.getMyData().lxfs == ''){
      console.log(678)
    }else{
      console.log(987)
    }
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.click = content.click;
body.shuru=content.shuru;
body.lxfs=content.lxfs;
Page(body)