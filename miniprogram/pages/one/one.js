// pages/one/one.js
const db = wx.cloud.database();
var bmap = require('../../libs/bmap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    weatherData: '',
    nav:[
      {
        img:"cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/zp.png",
        title:"全职招聘"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/jz.png",
        title: "兼职"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/zf.png",
        title: "租房"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/esf.png",
        title: "二手房"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/xf.png",
        title: "新房"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/esc.png",
        title: "二手车"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/eswp.png",
        title: "二手物品"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/spxzl.png",
        title: "商铺写字楼"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/bdfw.png",
        title: "本地服务"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/fjgz.png",
        title: "附近工作"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/gzjsq.png",
        title: "工资计算器"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/qyqbj.png",
        title: "企业情报局"
      },
      {
        img: "cloud://qxr-qkip9.7178-qxr-qkip9-1300569155/58/qd.png",
        title: "签到"
      },
    ],
    list: ['服务', '资讯'],
  },
  add(){
    wx.navigateTo({
      url: '../weather/weather',
    })
  },
  change(a) {
    this.setData({
      num: a.target.dataset.num
    })
  },
  clickTab(e){
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: '8caqOESyVUPBucC5pN5SCGRaeA6yyGzo'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = weatherData.currentCity + '\xa0' + weatherData.temperature + '\xa0' +                        weatherData.weatherDesc;
      // 城市+温度+天气
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求
    BMap.weather({
      fail: fail,
      success: success
    }); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var _this = this;
    db.collection('work').get({
      success: function (res) {
        console.log(res.data)
        _this.setData({
          con:res.data
        })
      }
    })
    db.collection('zixun').get({
      success: function (res) {
        console.log(res.data)
        _this.setData({
          zixun: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})