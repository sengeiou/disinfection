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
  }

 




var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindshow = content.bindshow;
body.denglu = content.denglu;
body.uName = content.uName;
body.uPwd = content.uPwd;
Page(body)