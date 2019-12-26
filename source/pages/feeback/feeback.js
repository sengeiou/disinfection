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
    this.Base.setMyData({
      aa:false
    })
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
      
console.log('快快快')

  

  }
  click(){
    var qsaaa=this.Base.getMyData().inputvalue;
    var ssss=this.Base.getMyData().lxfs; 
    var memberapi = new MemberApi();
    var that=this;
 
    if(qsaaa == '' || qsaaa==undefined){
      console.log('为空')
      this.Base.toast('请填写反馈内容')
      return;
    }
    wx.showModal({
      title: '提示',
      content: '是否提交意见反馈？',
      confirmText: "确认",
      success: function (res) {
        if (res.confirm) {
          memberapi.fankui({
            member_id: that.Base.getMyData().memberinfo.id,
            content: qsaaa,
            summary: ssss,
            status: 'A' 
          }, (fankui) => {
            wx.navigateBack({
            })
            that.Base.toast('提交成功!') 
          })
        }
      }
    })
    
    this.setData({
      inputInit: '', // 清空输入框中的内容
    });

 console.log(qsaaa)
    console.log(ssss)
  }
  shuru(e){
    this.Base.setMyData({
      inputvalue:e.detail.value
    })

    if (this.Base.getMyData().inputvalue == '') {
        console.log(123)
        this.Base.setMyData({
          aa:false
        })
    }else{
      console.log(2345);
      this.Base.setMyData({
        aa: true
      })
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