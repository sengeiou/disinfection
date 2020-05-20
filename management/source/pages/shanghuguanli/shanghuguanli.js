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
      title: '管理授权',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var l=[
      {id:1,name:"设备编号"},
      { id: 1, name: "设备编号"},

    ];
    this.Base.setMyData({ l })
  }
  onMyShow() {
    var that = this;
    var api=new OwnerApi();
    api.info({
      owner_id:this.Base.options.owner_id,

    }, (ret => {
      console.log(ret, "看看");
      this.Base.setMyData({ list: ret })
    }))


  }
  xiugaiyonghu(e){
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/xiugaiyonghuxinxi/xiugaiyonghuxinxi?owner_id='+id,
    })
  }
  xiugaishouji(e){
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/xiugaixinxi/xiugaixinxi?owner_id='+id,
    })
  }
  xgxx(e) {
    var name = e.currentTarget.dataset.name;
    if (name == "zengjiaxinxi") {
      wx.navigateTo({
        url: '/pages/zengjiaxinxi/zengjiaxinxi',
      })
    }


  }
  yichu(e){
    var api=new OwnerApi();
    api.owndevice({    
      owner_id:this.Base.options.owner_id,
    },(res)=>{
      wx.showToast({
        title: '已删除',
        icon: 'none'
    })
  })
}
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.xgxx = content.xgxx;
body.xiugaiyonghu = content.xiugaiyonghu;
body.xiugaishouji = content.xiugaishouji;
body.yichu=content.yichu;
Page(body)