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
   
  }
  onMyShow() {
    var that = this;
    var api = new OwnerApi;
    api.info({
    }, (info) => {
      var updated_date = Number(this.Base.getMyData().updated_date);
      this.Base.setMyData({
        list: info

      })

    })

    var now = new Date();
    console.log(this.Base.getMyData());
    console.log(this.Base.getMyData().InstInfo);
    console.log(this.Base.getMyData().InstInfo.withdrawtime);
    this.Base.getMyData().InstInfo;//.withdrawtime;
    var withdrawtime = this.Base.getMyData().InstInfo.withdrawtime;
    var mytime = ApiUtil.FormatDateTime(now);
    var mydate = ApiUtil.FormatDateTimet(now)
    var hour = ApiUtil.FormatDateHour(now);
    var hourt = parseInt(hour) + parseInt(withdrawtime) ;
    var min = ApiUtil.FormatDateMin(now);
    var sec = ApiUtil.FormatDateSec(now)
    var mytimenowt = mydate + hourt + ":" + min + ":" + sec;
    this.Base.setMyData({
      mytime, mytimenowt, hourt
    })
  }

}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;

Page(body)