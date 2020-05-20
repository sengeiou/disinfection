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
      title: '申请提现',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({amount:''});
  }
  onMyShow() {
    var that = this;
    var api=new OwnerApi;
    api.info({  
    },(info)=>{
      var amount = info.balance;
        this.Base.setMyData({
    amount
     })
      console.log(amount+"先看看")
    })

  }
  amount(e){
    this.Base.setMyData({
      amount: e.detail.value
    })
  }
     tixianjilu(e) {
       var amount = this.Base.getMyData().amount; 
      wx.navigateTo({
        url: '/pages/tixianjilu/tixianjilu?amount='+amount,
      })
  }
  
  lijitixian(e){
    var amount = Number(this.Base.getMyData().amount); 
    var api=new OwnerApi();
    api.withdrew({
      amount:amount
    },(ret)=>{
      wx.navigateBack({
      })

    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.tixianjilu=content.tixianjilu;
body.lijitixian=content.lijitixian;
body.amount=content.amount;
Page(body)