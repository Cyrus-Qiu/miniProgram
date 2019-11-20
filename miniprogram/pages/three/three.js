// pages/three/three.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tittle: "假客服",
    syas: [{
      'robot': '我是图灵，来跟我聊天吧！'
    }],
    headLeft: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4139308026,2925331886&fm=26&gp=0.jpg',
    headRight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getUserInfo({
      success: function (e) {
        let header = e.userInfo.avatarUrl
        that.setData({
          headRight: header
        })
      }
    })
  },
  converSation: function (e) {
    let that = this
    var obj = {},
      isay = e.detail.value.says,
      syas = that.data.syas,
      length = syas.length,
      key = 'c2fedcd494974d41becd6df1118fa9fa'

    console.log(length)
    wx.request({
      url: 'http://www.tuling123.com/openapi/api?key=' + key + '&info=' + isay,
      success: function (res) {
        let tuling = res.data.text;
        obj.robot = tuling;
        obj.isay = isay;
        syas[length] = obj;
        that.setData({
          syas: syas
        })
      }
    })


  },
  delectChat: function () {
    let that = this
    that.setData({
      syas: []
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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