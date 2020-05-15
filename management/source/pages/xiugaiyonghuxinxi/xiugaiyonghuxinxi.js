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
      title: '修改信息',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var ownerApi = new OwnerApi();
    ownerApi.info({}, (info) => {
      var name=info.name;
      var shopname = info.shopname;
      var shopaddress= info.shopaddress;
      this.Base.setMyData({
        name,shopname,shopaddress
      })

      console.log(info, "阿达");
      //this.Base.setMyData({ OwnerInfo: info });
    });

    
  
  }
  name(e){
    //  console.log(e.detail.value )
     this.Base.setMyData({
             name: e.detail.value   
     })

  }
  shopname(e) { 
    this.Base.setMyData({
     shopname : e.detail.value
    })
  }
  shopaddress(e) {
    this.Base.setMyData({
     shopaddress: e.detail.value
    })
   }
  back(e){
    var name= this.Base.getMyData().name;
    var shopname = this.Base.getMyData().shopname;
    var shopaddress = this.Base.getMyData().shopaddress;
    // console.log(name);return;
    var that = this;
    var api = new OwnerApi;
    api.baseupdate({
      name: name,
      shopname: shopname,
      shopaddress:shopaddress
    }, (res) => {
       
        wx.showToast({
          title: '已保存',
          icon:'none'
        })
        wx.navigateBack({
        })
      
    })
     
  
      
    
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.back = content.back;
body.name=content.name;
body.shopname = content.shopname;
body.shopaddress = content.shopaddress;
Page(body)