var utils = require('../../utils/utils.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      latitude: 39.90403,
      longitude: 116.407526,
      iconPath: '../images/location.jpg',
    },{
      latitude: 39.95403,
      longitude: 116.507526,
      iconPath: '../images/location.jpg',
      },{
        latitude: 39.90403,
        longitude: 116.487526,
        iconPath: '../images/location.jpg',
    }, {
      latitude: 39.93403,
      longitude: 116.357526,
      iconPath: '../images/location.jpg',
    }],
      
    // circles: [{
    //   latitude: 39.90403,
    //   longitude: 116.407526,
    //   color: '#FF0000DD',
    //   fillColor: '#7cb5ec88',
    //   radius: 1700,
    //   strokeWidth: 1
    // }],
    longitude: '',
    latitude: '' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });

        /*TODO */
        // var coordinates = utils.queryProximity();
        
        var coordinates = [{
          latitude: res.latitude+0.1,
          longitude: res.longitude+0.1
        },{
          latitude: res.latitude-0.1,
          longitude: res.longitude+0.1
        },{
          latitude: res.latitude - 0.1,
          longitude: res.longitude - 0.1
        },{
          latitude: res.latitude + 0.1,
          longitude: res.longitude - 0.1
        }];



        /*tempMarkers作为数据中转*/
        var tempMarkers = [{
          latitude: res.latitude,
          longitude: res.longitude,
          iconPath: '../images/jiang.jpg'
        }];

        for(var i = 0; i < coordinates.length; i++){
          var tempLatitude = coordinates[i].latitude;
          var tempLongitude = coordinates[i].longitude;
          tempMarkers.push({
            latitude: tempLatitude,
            longitude: tempLongitude,
            iconPath: '../images/song.jpg'
          });
        }

        that.setData({
          markers: tempMarkers
        });

        console.log(res.latitude);
        console.log(tempMarkers);



        /*TODO 后期的一些高级操作需要我们调用腾讯地图的自带功能，这里暂时不需要*/
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 28
        // })
      }
    })
  },

  checkIn: function(){
    //TODO
    // var success = utils.checkPosition();
    var success = true;
    if(success){
      console.log("Succesfully check!");
      wx.showModal({
        title: '+1s',
        content: '成功续命，是否继续？',
        success: function (res) {
          if (res.confirm) {
            
          } else if (res.cancel) {
            wx.switchTab({
              url: '../weather/weather',
            });
          }
        }
      })
    }else{
      console.log("Fail to check in");
    }
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