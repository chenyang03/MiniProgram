module.exports = {
  keepSession: keepSession,
  register: register,
  queryProximity: queryProximity,
  checkPosition: checkPosition
}



/*@brief 每次向服务器请求的时候，需要确保我们有用户的openid，所以要维护用户的登录状态，
 *@return true: 用户已经注册过手机
 *        false： 用户没有注册过手机，跳转到注册界面去
 * */


 function keepSession(){
   var openid = wx.getStorageSync('openid');
   if(openid){
     return openid;
   }
   if(!openid){
    wx.login({
      success: function(res){
        var code = res.code;
        console.log(res);
        wx.getUserInfo({
          success: function(res){
            console.log(res);
            console.log({
              code: code,
              rawData: res.rawData
            });
            wx.request({
              /*TODO 发送用户信息，换取openid*/
              url: 'https://45053688.hazelnutsgz.com/',
              method: 'POST',
              data: {
                /*fucking加密，直接裸奔数据，青鸟林直接存数据库就好了*/
                code: code,
                rawData: res.rawData,
              },
              success: function(res){
                if(res.data.registered){
                  var openid = res.data.openid;
                  wx.setStorageSync('openid', openid);
                  return openid;
                  }else{
                    wx.redirectTo({
                      url:"/pages/register/register",
                      success: function(){
                        console.log("成功跳转到注册界面");
                      },
                      fail: function(){
                        console.log("跳转注册界面失败");
                      }
                    });
                }
              },
              fail: function(){
                console.log('上传数据失败');
              }
            });
          },
          fail:function(){
            console.log('wx.getUserInfo()失败');
          }
        });
      },
      fail: function(){
        console.log('wx.login()失败');
      }
    });
   }else{
     return true;
   }
 }

function register(info){
  var user = info.user;
  var phone = info.phone;
  var openid = keepSession();
  wx.request({
    url:'青鸟林处理新的注册信息',
    method:'POST',
    data:{
      user: user,
      phone: phone,
      openid: openid,
    },
    success: function(res){
      if(res.data.success){
        wx.showToast({
          title: '注册成功',
          icon: 'success'
        });
        wx.switchTab({
          url: '../index/index',
        })
      }else{
        console.log('服务器端注册失败');
      }
    },
    fail: function(){
      console.log('发送注册请求失败');
    }
  });
}


function queryProximity(){
  wx.getLocation({
    type: 'wgs84',
    success: function(res){
      var latitude = res.latitude;
      var longitude = res.longitude;
      var openid = keepSession();

      wx.request({
        url: '青鸟林处理返回给我附近坐标的url',
        method: 'POST',
        data:{
          latitude: latitude,
          longtitude: longtitude,
          openid: openid 
        },
        success: function(res){
          var coordinates = res.data.coordinates;  //经纬度坐标数组
          if(coordinates){
            console.log("位置坐标为:" + coordinates);
            return coordinates;
          }else{
            console.log("未收到青鸟林的附近位置坐标");
            }
          },
        fail: function(){
          console.log('发送位置失败');
        }
      });
    },
    fail: function(){
      console.log('定位失败');
    }
  });
}

/*TODO 签到*/
function checkPosition(){

}

