// 引用百度地图微信小程序JSAPI模块
var bmap = require('../../utils/bmap-wx.js');
Page({
  data: {
    weatherData: ''
  },
  onLoad: function () {
    wx.showModal({
      title: '二院',
      content: '天气晴朗',
    });

    var that = this;
    // 新建百度地图对象
    var BMap = new bmap.BMapWX({
      /*这是我自己的百度天气api的ak，到时候换成新磊的百度ak*/
      ak: '0b3GQfVvRGgKbbTKZX16w1fxFt7NLwbz'
    });
    var fail = function (data) {
      console.log('请求失败！'+ data.errMsg);
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    console.log('weather' + that.data.weatherData);
    // 发起weather请求
    BMap.weather({
      fail: fail,
      success: success
    });
  }
})