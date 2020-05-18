// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { AliyunApi } from "../../apis/aliyun.api.js";
import { OwnerApi } from "../../apis/owner.api.js";
class Content extends AppBase {
  constructor() {
    super();
    this.needauth = false;
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '',
      title: '',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    this.Base.setMyData({
      show:false,
      send:false,
      reminder:0
    });
  }
  yanzhengma(e){
    console.log(e)
    this.Base.setMyData({
      yanzhengma:e.detail.value
    })

  }
  mobile(e){
    console.log(e)
    this.Base.setMyData({
      mobile:e.detail.value
    })
  }
  pwd(e){
    this.Base.setMyData({
      password:e.detail.value
    })
  }
  sendmessage(e){
    console.log(e)
    var send = this.Base.getMyData().send;
    var mobile = this.Base.getMyData().mobile;
    var reminder = this.Base.getMyData().reminder;
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var api = new AliyunApi;
    var that = this;
    if (!(myreg.test(mobile))) {
      wx.showToast({
        title: '手机号码不正确，请重新输入',
        icon: 'none'
      })
      return;
    }
    api.sendverifycode({
      mobile: mobile,
      type: 'reset'
    }, (ret) => {
      if (ret) {

        that.Base.setMyData({
          send: true,
          reminder: 60
        })
        that.Base.setInVerify();
      }
    })
  }
  setInVerify() {
    var reminder = this.getMyData().reminder;
    var k = setInterval(() => {
      if (reminder >= 0) {
        var mm = reminder--;
        this.setMyData({
          reminder: mm
        })
      }
      if (reminder < 0) {
        clearInterval(k);
      }

    }, 1000);
  }
 chongzhi(e) {
   console.log(this.Base.getMyData());
   var mobile=this.Base.getMyData().mobile;
   var yanzhengma=this.Base.getMyData().yanzhengma;
   var password=this.Base.getMyData().password;
   var api=new OwnerApi;
   api.reset({
     mobile:mobile,
     verifycode:yanzhengma,
     password:password,
     type:"reset"
   }, (ret) => {
         console.log(ret);
    if (ret.code=="0"){
           wx.navigateTo({
             url: '/pages/tuichudenglu/tuichudenglu',
           })
         }else{
           wx.showToast({
             title: '手机号码错误',
             icon:'none'
           })
         }
       })
     }
   

}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.chongzhi = content.chongzhi;
body.yanzhengma = content.yanzhengma;
body.mobile=content.mobile;
body.sendmessage = content.sendmessage;
body.setInterval=content.setInVerify;
body.pwd=content.pwd;
Page(body)