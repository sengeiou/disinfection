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
    var api = new OwnerApi();
    // api.childlist({
    // }, (childlist) => {
    //   owner_id: this.Base.options.owner_id;
    //   var name = childlist.name;
    //   var shopname = childlist.shopname;
    //   var shopaddress = childlist.shopaddress;
    //   this.Base.setMyData({
    //     name,shopname,shopaddress
    //   })

    //   console.log(childlist, "阿达");
    //   return;
    //   //this.Base.setMyData({ OwnerInfo: info });
    // });
    api.info({
      owner_id: this.Base.options.owner_id,
    }, (ret => {
      console.log(ret, "看看");
     var name = ret.name;
     var shopname = ret.shopname;
     var shopaddress = ret.shopaddress;
      this.Base.setMyData({ list: ret })
        this.Base.setMyData({
         name,shopname,shopaddress
     })
    }))

    
  
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
      owner_id: this.Base.options.owner_id,
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