// pages/content/content.js
import * as echarts from '../../ec-canvas/echarts';


import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { ApiUtil} from "../../apis/apiutil";
import { MemberApi } from "../../apis/member.api.js";
import { OwnerApi } from "../../apis/owner.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      // title: '收益',
      title: '收益',
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
    api.report({},(report)=>{   
   for (var i = 0; i < report.length; i++) {
      report[i].thismonthincome = new Number(report[i].thismonthincome).toFixed(2);
      }

      this.Base.setMyData({report,
        ready:0,
        ec: {
          onInit: function(canvas, width, height, dpr) {
            console.log("ekkk1");
            console.log("ekkk2", canvas, width, height, dpr);
            const chart = echarts.init(canvas, null, {
              width: width,
              height: height,
              devicePixelRatio: dpr // new
            });
            canvas.setChart(chart);

            var option = {
              grid: {
                containLabel: true
              }, 
              tooltip: {
                show: true,
                trigger: 'axis'
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: report.dailyX,
                // show: false
              },
              yAxis: {
                x: 'center',
                type: 'value',
                splitLine: {
                  lineStyle: {
                    type: 'dashed'
                  }
                }
                // show: false
              },
              series: [{
                name: '日总收入',
                type: 'line',
                smooth: true,
                data: report.dailyY
              }]
            };

            chart.setOption(option);
            return chart;
          }
        },
        ecweek: {
          onInit: function (canvas, width, height, dpr) {
            console.log("ekkk1");
            console.log("ekkk2", canvas, width, height, dpr);
            const chart = echarts.init(canvas, null, {
              width: width,
              height: height,
              devicePixelRatio: dpr // new
            });
            canvas.setChart(chart);

            var option = {
              grid: {
                containLabel: true
              },
              tooltip: {
                show: true,
                trigger: 'axis'
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: report.weeklyX,
                // show: false
              },
              yAxis: {
                x: 'center',
                type: 'value',
                splitLine: {
                  lineStyle: {
                    type: 'dashed'
                  }
                }
                // show: false
              },
              series: [{
                name: '周总收入',
                type: 'line',
                smooth: true,
                data: report.weeklyY
              }]
            };

            chart.setOption(option);
            return chart;
          }
        },
        ecmonth: {
          onInit: function (canvas, width, height, dpr) {
            console.log("ekkk1");
            console.log("ekkk2", canvas, width, height, dpr);
            const chart = echarts.init(canvas, null, {
              width: width,
              height: height,
              devicePixelRatio: dpr // new
            });
            canvas.setChart(chart);

            var option = {
              grid: {
                containLabel: true
              },
              tooltip: {
                show: true,
                trigger: 'axis'
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: report.monthlyX,
                // show: false
              },
              yAxis: {
                x: 'center',
                type: 'value',
                splitLine: {
                  lineStyle: {
                    type: 'dashed'
                  }
                }
                // show: false
              },
              series: [{
                name: '月总收入',
                type: 'line',
                smooth: true,
                data: report.monthlyY
              }]
            };

            chart.setOption(option);
            return chart;
          }
        }
      });



    });
  }
  changetap(e){
    this.Base.setMyData({ready:e.currentTarget.id})
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.changetap = content.changetap;
Page(body)