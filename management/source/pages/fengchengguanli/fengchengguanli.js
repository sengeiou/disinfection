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
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var ownerapi = new OwnerApi();
    var OwnerInfo=this.Base.getMyData().OwnerInfo;
    if(OwnerInfo.role=='A'){
      ownerapi.childlist({},(list)=>{
        this.Base.setMyData({list})
      });
    }
  }
  payratechange(e){
    console.log(e);
    var idx=e.currentTarget.id;
    var list=this.Base.getMyData().list;
    list[idx].payrate = e.detail.value; 
    this.Base.setMyData({ list });
  }
  updaterate(e){

    var idx = e.currentTarget.id;
    var list = this.Base.getMyData().list;
    var ownerapi = new OwnerApi();
    ownerapi.updatepayrate({
      ownerb_id:list[idx].id,
      payrate:list[idx].payrate
    },()=>{
      this.Base.toast("修改成功");
    });
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow; 
body.payratechange = content.payratechange;
body.updaterate = content.updaterate;
Page(body)