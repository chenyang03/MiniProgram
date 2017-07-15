//app.js
var utils = require('./utils/utils.js');
App({
  /**
   * @brief 先检查是否还处于登录状态，如果成功直接进入主页，否则进行登录流程
   */
  onLaunch: function () {
  /*一个对象内，最外层函数调用的函数中，this的指向会不再指向这个对象，所以用that保存this*/
    var that = this;

    utils.keepSession();
    /*测试用，之后会删除 */
    wx.redirectTo({
      url: './pages/register/register',
    })

    
    // utils.keepSession();
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
  ,
  /**
   * 获取服务器为用户分配的3rd_session
   */
   globalData: {
     hasRegisterPhone: false,
     utoken: 'empty'
   }

})

