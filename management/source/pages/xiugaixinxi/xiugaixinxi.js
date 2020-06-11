// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from"../../apis/owner.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '',
      title: '修改信息',
    });
  }
  mobile(e){
    this.Base.setMyData({
     mobile: e.detail.value
    })
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var api=new OwnerApi();
    api.info({
      owner_id: this.Base.options.owner_id
    }, (ret) => {  
      console.log(ret, "看看先");
      var mobile=ret.mobile;
      // console.log(mobile)
      // return;
      this.Base.setMyData({ list: ret })
      this.Base.setMyData({
        mobile
      })
    });

  }
  back() {
    var mobile=this.Base.getMyData().mobile;
    var that=this;
    var api=new OwnerApi();
    api.updatemobile({
      owner_id:this.Base.options.owner_id,
      mobile:mobile
    }, (ret) => {
      console.log(ret, 'ret')
      if (ret.code == "0") {
        wx.showToast({
        title: '已保存',
        icon: 'none'
      })
        wx.navigateBack({
          })
      } else {
        wx.showToast({
          title: ret.return,
          icon: 'none'
        })
      }
    })
  }
}
    


var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.back = content.back;
body.mobile=content.mobile;
Page(body)