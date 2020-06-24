// pages/content/content.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
import {
  ApiUtil
} from "../../apis/apiutil";
import {
  MemberApi
} from "../../apis/member.api.js";
import {
  OwnerApi
} from "../../apis/owner.api.js";
import { OrderApi }from"../../apis/order.api.js"
class Content extends AppBase {
  constructor() {
    super();
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '',
      title: '设备订单',
    });
  }


  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var now = new Date();
    var startdate = ApiUtil.FormatDate(new Date(now.getTime() - 7 * 24 * 3600 * 1000));
    var enddate = ApiUtil.FormatDate(now);
    var maxdate = ApiUtil.FormatDate(now);

    this.Base.setMyData({
      startdate,
      enddate,
      maxdate
    });

  }

  onMyShow() {
    var that = this;
    this.loaddata();

  }
  bindDateChange(e) {
    console.log(e);
    if (e.currentTarget.id == "startdate") {
      this.Base.setMyData({
        startdate: e.detail.value
      })
    } else {
      this.Base.setMyData({
        enddate: e.detail.value
      })
    }
    this.loaddata();
  }
  loaddata() {
    var data = this.Base.getMyData();
    var api = new OwnerApi();
    api.ordersearch({
      pay_time_from: data.startdate + " 00:00:00",
      pay_time_to: data.enddate + " 23:59:59",
      orderstatus: "B",
      orderby: "r_main.pay_time desc"
    }, (list) => {
      this.Base.setMyData({
        list
      });
    })
  }
}




var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.qjxz = content.qjxz;
body.bindDateChange = content.bindDateChange; 
body.loaddata = content.loaddata;
body.queding=content.queding;
Page(body)