
var app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  
  formSubmit: function (event) {
      var nickname = event.detail.nickname;
      var phoneNumber = event.detail.phoneNumber;
      wx.request({
        /*请求给青鸟林的另一个url，用来处理用户注册电话和昵称，返回给我true或者false*/
        url: 'url',
        data: app.globalData.utoken,
        success: function(res){
          var registered = res.data;
          console.log(res.data);
          if(registered){
            wx.switchTab({
              url: '../index/index'
            });
          }else{
            console("服务端注册失败");
          }
        },
        fail: function(res){
          console.log("发送注册信息失败");
        } 
        });
    
   wx.reLaunch({
     url: '../index/index',
   })
    console.log(event.detail.value);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})