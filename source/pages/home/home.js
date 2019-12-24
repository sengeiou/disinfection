// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { MemberApi } from "../../apis/member.api.js";
import { OrderApi } from "../../apis/order.api.js";
import { WechatApi } from "../../apis/wechat.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({jinxinzhon:''});
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

    memberapi.xuanxianglist({ orderby: 'r_main.seq' }, (xuanxianglist) => {
      this.Base.setMyData({ xuanxianglist })

    })

    memberapi.zhengshu({}, (zhengshu) => {
      this.Base.setMyData({ zhengshu })
    })

    instapi.indexbanner({ orderby: 'r_main.seq' }, (indexbanner) => {
      this.Base.setMyData({ indexbanner })
    })
    console.log(123123);
    this.getorder();
  }
  getorder() {

    var api = new OrderApi();
    api.myorder({ orderstatus: 'B', xiaoduzhuantai: 'B' }, (myorder) => {

      if (myorder.length > 0) {
        this.Base.setMyData({ jinxinzhon: myorder[0].xuanxiang_id, jinxinzhonid: myorder[0].id });
        var orderinfo=myorder[0];
        this.minReturn(Number(orderinfo.kaishi_shijian_timespan) + Number(orderinfo.xuanxiang_time) - Number(Date.parse(new Date()) / 1000),orderinfo.id);
        wx.showToast({
          title: "您已有一个订单正在进行中",
          icon: 'none',//图标，支持"success"、"loading" 
          duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
          mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
        })
      }
      else{
        this.Base.setMyData({jinxinzhon:''})

      }


    })

  }
  click() {
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
    })
  }
  xiaofei() {
    wx.navigateTo({
      url: '/pages/xiaofei/xiaofei',
    })
  }
  feeback() {
    wx.navigateTo({
      url: '/pages/feeback/feeback',
    })
  }
  kaishi(e) {
    console.log(e);
    var jinxinzhon = this.Base.getMyData().jinxinzhon;
    if (jinxinzhon != '') {
      wx.navigateTo({
        url: '/pages/xiaodu/xiaodu?id=' + this.Base.getMyData().jinxinzhonid,
      })
      return
    }



    var taocan = e.currentTarget.dataset.id;


    var api = new OrderApi();

    api.createorder({ amount: taocan.price, xuanxiang_id: taocan.id }, (res) => {

      if (res.code == '0') {
        var api = new WechatApi();

        api.prepay({ id: res.return }, (payret) => {

          payret.complete = function (e) {


            if (e.errMsg == "requestPayment:ok") {


              wx.navigateTo({
                url: '/pages/xiaodu/xiaodu?id=' + res.return,
              })


            }
            else {

              console.log("支付失败");

            }

          }
          console.log(payret);
          wx.requestPayment(payret)

        })

      }


    })






  }

  getUserInfo() {

    AppBase.UserInfo.openid = undefined;



    this.onShow();


  }

  minReturn(time,id) {
    var that = this;
    let t = setInterval(() => {

      time--
    console.log(time);
      this.Base.setMyData({ t:t });
      if (time <= 0) {
        clearInterval(t)
        that.jieshuxiaodu(id);
      }
    }, 1000)
  }
    onHide(){
    console.log(123);
    clearInterval(this.Base.getMyData().t);

  }
  onUnload(){
    console.log(4560);
    clearInterval(this.Base.getMyData().t);
  }
  jieshuxiaodu(id){
   var that=this;
    var api=new OrderApi();
    api.xiaodujieshu({id:id},(res)=>{
   
      wx.showToast({
        title: "您的订单已完成",
        icon: 'none',//图标，支持"success"、"loading" 
        duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
        mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
      })
      that.getorder();
    //that.onMyShow();
    })

  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.click = content.click;
body.kaishi = content.kaishi;
body.xiaofei = content.xiaofei;
body.getUserInfo = content.getUserInfo;
body.feeback = content.feeback;
body.getorder = content.getorder;
body.minReturn=content.minReturn;
body.jieshuxiaodu=content.jieshuxiaodu;
Page(body)