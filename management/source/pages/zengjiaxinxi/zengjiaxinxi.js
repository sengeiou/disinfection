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
class Content extends AppBase {
  constructor() {
    super();
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '',
      title: '我的商户',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      checkcount: 0
    });
  }
  onMyShow() {
    var that = this;
    var api = new OwnerApi();
    api.canchoosedevicelist({
      // 
    }, (ret => {
      // console.log(item.id, "llll")
      this.Base.setMyData({
        list: ret
      })
    }))
  }



  querentianjia(e) {
    var list = this.Base.getMyData().list;
    var checkcount = 0;
    var devices=[];
    for (var i = 0; i < list.length; i++) {
      if (list[i].checked == true) {
        checkcount++;
        devices.push(list[i].xiaoduji_id);
      }
    }
    if(checkcount==0){
      this.Base.info("请至少选择一个设备");
      return;
    }
    var devicesstr = devices.join(",");
    var api = new OwnerApi();
    api.binddevice({
      ownerb_id: this.Base.options.ownerb_id,
      devices: devicesstr
    }, (ret) => {
      if(ret.code=="0"){

        if (this.Base.options.from == "new") {

          wx.navigateBack({
            delta: 3
          })
        } else {
          wx.navigateBack({

          })
        }
      }else{

        this.Base.info(ret.return);
      }
      
    })
  }
  dianji(e) {
    var idx = e.currentTarget.id;
    var list = this.Base.getMyData().list;
    list[idx].checked = list[idx].checked == true ? false : true;
    var checkcount = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].checked == true) {
        checkcount++;
      }
    }
    this.Base.setMyData({
      list,
      checkcount
    });
  }
}





var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.zengjiaxinxi = content.zengjiaxinxi;
body.querentianjia = content.querentianjia;
body.dianji = content.dianji;
Page(body)