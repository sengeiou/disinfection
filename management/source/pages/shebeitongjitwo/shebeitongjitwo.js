// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil } from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from "../../apis/owner.api.js"
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

  onMyShow(e) {
    var that = this;
    var api=new OwnerApi(); 
    api.devicesummary({},ret=>{
    //  console.log(ret,owner_id,"9999999999")
    this.Base.setMyData({  list:ret })
      //      var arr=[];
      //      var arr2=[];
      // for (var i=1;i<ret.alldevice.length;i++) {
      //   if (ret.alldevice[i].workingtype=="WORK") {
      //     // console.log(ret, "6666666666666")
      //     arr.push(ret.alldevice[i])
      //   }
      //   if(ret.alldevice[i].workingtype=="ON"){
      //     arr2.push(ret.alldevice[i])
      //   }
      //   // console.log(ret, "6666666666666")
      //   // this.Base.setMyData({
      //   //   list4:ret.alldevice
      //   // })
      //   }
      //   this.Base.setMyData({ list4:ret.alldevice})
      // // console.log(ret, "6666666666666")
      // // console.log(arr, "77777777777")
      // this.Base.setMyData({  list2:arr })
      // this.Base.setMyData({ list3:arr2 })
    })
  
    
  }
  searchtxt(e){
    this.Base.setMyData({
     search : e.detail.value
    })
  }
  tijiao(e) {
    var txt=this.Base.getMyData().search;
  // console.log(txt+"11")
    var that=this;
    var list=this.Base.getMyData().list;
    // console.log(list,"list")
      // wx.navigateTo({
      //   url: '/pages/sbtjson/sbtjson',
      // })
      if(txt==undefined || txt==""){
        wx.showToast({
          title: '请输入搜索内容',
          icon:'none'
        })
      }
      // return
      // console.log(444444)
      for(var i=0;i<list.lenght;i++){
        if(list[i].content==txt){
          wx.navigateTo({
        url: '/pages/sousuoshebei/sousuoshebei?txt='+txt,
      })
        }
        // txt:"",
        else{
        }
        console.log("ttttt")
      }
  }
}



var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.sou = content.sou;
body.searchtxt=content.searchtxt;
body.tijiao=content.tijiao;
body.dianpushebei = content.dianpushebei;
Page(body)