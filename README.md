# MiniProgram
WeChat Mini Program



## 目前完成的功能：

#### 1.注册界面

#### 2.完整的鉴权和保持session机制

后来发现，加密只是为了业务服务器和客户端之间通信的安全，为了简便起见，对目前来说没有必要，现在可以把**rawData**（包括用户昵称，用户身份等信息）直接发到服务器上面去， 由青鸟林直接存入数据库，然后返回给客户端**openid**（作为和服务器交换数据的用户标识），之后每个用户请求的时候带上openid即可。和服务器数据交换细节见[交接](#index)。 

#### 3.将多个标注点画到地图上

目前使用的是腾讯小程序提供的地图，后续如果功能丰富可能会用到百度地图的api，和服务器数据交换的细节见[交接](#index)

#### 4.调用百度天气api显示天气

百度的天气api有点bug，因为连错误结果都不返回给我，所以目前还没有数据



## 交接{#index}（注意：数据的交互全部是json格式）

#### 1.发送用户信息，换取openid

##### 相关函数：`keepSession()`

##### url: '待定'(由青鸟林填写)

##### method: 'POST‘

##### 发送数据格式： 

```json
{
    code: "013VSxwK1xExW70pcryK10EJwK1VSxw6",
    rawData: {"nickName":"hazelnut",
                "gender":1,
                "language":"zh_CN",
                "city":"",
                "province":"Chongqing",
                "country":"China",                	
                "avatarUrl":"https://wx.qlogo.cn"}
}
```

##### 接收数据格式：

成功：

```json
{
  openid: 'asdfasf'
}
```

失败：

```json
{
  errorMsg: '太丑了，无法使用我们的小程序'
}
```





#### 2.发送当前地址，换取附近POI信息

##### 相关函数：`queryProximity()`

##### url: '待定'(由青鸟林填写)

##### method: 'POST‘

##### 发送数据格式： 

```json
{
  openid: 'asdfasfsfas',
  latitude: 10，
  longitude: 33
}
```

##### 接收数据格式：

```son
{
  coordinates:[
    {
      latitude: 100,
      longitude: 300
    },{
      latitude: 200,
      longitude: 20
    },{
      latitude: 10,
      longitude: -25
    }..........
  ]
}
```



#### 3.实现签到

##### 相关函数：`checkPosition()`

##### url: '待定'(由青鸟林填写)

##### method: 'POST‘

##### 发送数据格式： 需要大家讨论





#### 4.用户注册

##### 相关函数：`register()`

##### url: '待定'(由青鸟林填写)

##### method: 'POST‘

##### 发送数据格式：

```son
{
  openid: 'asdfasdfsad',
  user: '老板最帅'，
  phone: '15202345235'
}
```

##### 接收数据格式:

```json
{
  success: true
}
```





