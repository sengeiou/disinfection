// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from "../..//apis/owner.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '',
      title: '设备统计',
    });
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var api=new OwnerApi();
    api.devicesummary({
    }
    ,ret=>{
    console.log(ret,"22")
    this.Base.setMyData
    ({  list:ret     })
      var arr = [];
    for(var i=0;i<ret.alldevice.length;i++){
        if(ret.alldevice[i].ownerb_id==0){ 
          //  ret.alldevice.splice(i,1)
        
          arr.push(ret.alldevice[i]);
          
          
      
        }
   }
      console.log(arr, "7777")
      this.Base.setMyData({ list2: arr })

    })

  }

  searchtxt(e) {
    this.Base.setMyData({
      search: e.detail.value
    })
  }
  // chakan()
  dianji(e){
    var txt = this.Base.getMyData().search;
    // console.log(txt+"11")
    var that = this;
    var list2 = this.Base.getMyData().list2;
    var search=this.Base.getMyData().search;
    // var name = list2.name;
    // console.log(list2,name,"2222222")
    // return;
    if (txt == undefined || txt == "") {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      })
return
    }
    wx.navigateTo({
      url: '/pages/sousuoshebei/sousuoshebei?name='+search,
    })
  }
  shebeitongji(){
    wx.navigateTo({
      url: '/pages/shebeitongjitwo/shebeitongjitwo',
    })
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.shebeitongji=content.shebeitongji;
body.dianji=content.dianji;
body.searchtxt=content.searchtxt;
Page(body)