// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from "../../apis/owner.api.js";
import { AliyunApi } from "../../apis/aliyun.api.js";
class Content extends AppBase {
  constructor() {
    super();
    this.needauth=false;
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
    this.Base.setMyData({
      show:"yy",
    })
  }
  onMyShow() {
    var that = this;
    this.Base.setMyData({
      send: false,
      reminder: 0
    });
  }
  bindshow(e) {
    var type = e.currentTarget.dataset.type;
    console.log(type);
    if (type == "yy") {
      this.Base.setMyData({
        show: "yy"
      })
    }
    if (type == "yh") {
      this.Base.setMyData({
        show: "yh"
      })
    }
  }
  zhuce(){
    var that=this;
    var mobile=this.Base.getMyData().mobile;
    var yanzhengma = this.Base.getMyData().yanzhengma;

    var api=new OwnerApi();
    // console.log("zhuce",mobile,verifycode);
    api.register({
      mobile:mobile,
      verifycode: yanzhengma,
    },(ret)=>{
      console.log(ret,'ret')
      if(ret.code=="0"){
        wx.setStorageSync("token", ret.return);
        wx.navigateTo({
          url: '/pages/chongzhi/chongzhi',
        })
        // ({
        //  title: '注册成功',
        // })
     
      }else{
        wx.showToast({
          title: ret.return,
          icon:'none'
        })
      }
    })
  }
  sendmessage(e) {
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
      type: 'register'
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
  denglu() { 
    var that=this;
    var mobile=this.Base.getMyData().mobile;
    var password=this.Base.getMyData().password;
    var api=new OwnerApi;
    console.log("denglu",mobile,password);
    api.login({
      mobile:mobile,
      password:password
    },(ret)=>{
      console.log(ret,'ret')
      if(ret.code=="0"){
        wx.setStorageSync("token", ret.return);
        wx.switchTab({
          url: '/pages/home/home'
        })

      }else{
        this.Base.info(ret.return)
      }
    })
  }
  uName(e){
     this.Base.setMyData({
       mobile:e.detail.value
     })

   } 
    uPwd(e){
      this.Base.setMyData({
       password: e.detail.value
      })

    }
  yanzhengma(e) {
    this.Base.setMyData({
      yanzhengma: e.detail.value
    })

  }
    wangjimima(e){
      var name=e.currentTarget.dataset.name;
      if(name=="wjmm"){
        wx.navigateTo({
          url: '/pages/wangjimima/wangjimima',
        })
      }
    }
  }

 




var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindshow = content.bindshow;
body.denglu = content.denglu;
body.uName = content.uName;
body.uPwd = content.uPwd;
body.wangjimima=content.wangjimima;
body.zhuce=content.zhuce;
body.setInterval = content.setInVerify;
body.sendmessage = content.sendmessage;
body.yanzhengma=content.yanzhengma;
Page(body)