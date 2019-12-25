// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { OrderApi } from "../../apis/order.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.getorderinfo();

  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi;
    instapi.indexbanner({ orderby: 'r_main.seq' }, (indexbanner) => {
      this.Base.setMyData({ indexbanner })
    })



    that.canvasRing = that.selectComponent("#canvasRing");
    that.canvasRing.showCanvasRing();


  }
  onHide(){
    console.log(123);
    clearInterval(t);

  }
  onUnload(){
    console.log(4560);
    clearInterval(this.Base.getMyData().t);
  }
  getorderinfo() {
    var that=this;
    var api = new OrderApi();
    api.orderinfo({ id: this.Base.options.id }, (orderinfo) => {

      this.Base.setMyData({ orderinfo })
      if(orderinfo.xiaoduzhuantai=='B')
      {
      this.minReturn(Number(orderinfo.kaishi_shijian_timespan) + Number(orderinfo.xuanxiang_time) - Number(Date.parse(new Date()) / 1000), Number(orderinfo.xuanxiang_time))
    } 
    if(orderinfo.xiaoduzhuantai=='C')
    {
      that.canvasRing = that.selectComponent("#canvasRing");
      that.canvasRing.showCanvasRing();
  

    }

    })
  }
  formatSeconds(time) {
    let min = Math.floor(time % 3600)
    let val = this.formatBit(Math.floor(min / 60)) + ':' + this.formatBit(time % 60)

    return val
  }
  formatBit(val) {
    val = +val
    return val > 9 ? val : '0' + val
  }

  minReturn(time, zontime) {
    var that = this;
    var baifenbi = (100 - (time / zontime) * 100);
    var bianlian = (100 / zontime).toFixed(2);

    console.log(baifenbi);
    console.log(bianlian);
    console.log(123123);

    let t = setInterval(() => {

      time--
      var a = this.formatSeconds(time);
      baifenbi = (Number(baifenbi) + Number(bianlian));

      this.Base.setMyData({ time: a, baifenbi: baifenbi.toFixed(2),t:t });
      that.canvasRing = that.selectComponent("#canvasRing");
      that.canvasRing.showCanvasRing();
      if (time <= 0) {
        clearInterval(t)
        that.Base.setMyData({ baifenbi: 100 });
        that.canvasRing = that.selectComponent("#canvasRing");
        that.canvasRing.showCanvasRing();
        that.jieshuxiaodu();
      }
    }, 1000)
  }
  jieshuxiaodu(){

    var api=new OrderApi();
    api.xiaodujieshu({id:this.Base.options.id},(res)=>{
   
       this.getorderinfo();


    })

  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.getorderinfo = content.getorderinfo;
body.formatSeconds = content.formatSeconds;
body.formatBit = content.formatBit;
body.minReturn = content.minReturn;
body.jieshuxiaodu=content.jieshuxiaodu;
Page(body)