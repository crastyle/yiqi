### 商品购买流程
#### 商品详情接口

[http://yqnet.wujidao.net/console/mobile/bsGoodsInfo/view.yh?sessionID=009B8589C13BFEB62113E79CAC13E159.12tomcat7A&goodsInfoId=8a5329ea7f0001011bcbaeb91dc9e91e&userId=7bfb1ab0c0a800f533b333b3193d4b1e](http://yqnet.wujidao.net/console/mobile/bsGoodsInfo/view.yh?sessionID=009B8589C13BFEB62113E79CAC13E159.12tomcat7A&goodsInfoId=8a5329ea7f0001011bcbaeb91dc9e91e&userId=7bfb1ab0c0a800f533b333b3193d4b1e)  



#### 商品加入购物车

[http://yqnet.wujidao.net/console/usercart/usercartMobile.do?sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&cartId=&goodsNum=1&productId=8a355e977f0001011bcbaeb9a131d5e4&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=add](http://yqnet.wujidao.net/console/usercart/usercartMobile.do?sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&cartId=&goodsNum=1&productId=8a355e977f0001011bcbaeb9a131d5e4&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=add)


    备注：加入购物车后，购物车的数量要改变，该接口返回的字段cureentGoodsNum为购物车现有数量


#### 商品直接购买

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&goodsAmount=566.0&goodsIds=8a355e977f0001011bcbaeb9a131d5e4&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=add](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&goodsAmount=566.0&goodsIds=8a355e977f0001011bcbaeb9a131d5e4&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=add)


#### 直接购买后进入预订单界面
[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec042877f0001017dbeae2ac617db49&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=view](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec042877f0001017dbeae2ac617db49&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=view)

    备注：将上界面接口返回的orderId查询预订单数据,此界面点击返回 调用删除预订单接口


#### 删除预订单接口

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec042877f0001017dbeae2ac617db49&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=del](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec042877f0001017dbeae2ac617db49&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=del)




## 确定订单
#### 确认订单按钮调用的接口：

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?goodsIds=8a355e977f0001011bcbaeb9a131d5e4&invPayee=&couponId=&couponName=&addressId=14d94929c0a800f52dee2dee3729ded7&orderId=aec620fe7f0001017dbeae2aea29eb25&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=topaysessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?goodsIds=8a355e977f0001011bcbaeb9a131d5e4&invPayee=&couponId=&couponName=&addressId=14d94929c0a800f52dee2dee3729ded7&orderId=aec620fe7f0001017dbeae2aea29eb25&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=topaysessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A)


## 支付
#### 界面调用接口
[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec620fe7f0001017dbeae2aea29eb25&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=view](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec620fe7f0001017dbeae2aea29eb25&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=view)


#### 支付按钮调用接口：

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec620fe7f0001017dbeae2aea29eb25&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=paying](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec620fe7f0001017dbeae2aea29eb25&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=paying)



## 支付益启币

####获取验证码

[http://yqnet.wujidao.net/console/verificationCode/verificationcodeMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&receivedPhoneNum=15920178657&mAction=add](http://yqnet.wujidao.net/console/verificationCode/verificationcodeMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&receivedPhoneNum=15920178657&mAction=add)

#### 支付接口：

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec620fe7f0001017dbeae2aea29eb25&vcode=675264&mAction=exchangeGoods](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aec620fe7f0001017dbeae2aea29eb25&vcode=675264&mAction=exchangeGoods)



#### 平台信息
[http://yqnet.wujidao.net/console/mobile/bsGoodsInfo/viewPlatform.yh? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&platformNum=p002](http://yqnet.wujidao.net/console/mobile/bsGoodsInfo/viewPlatform.yh? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&platformNum=p002)


####平台下商品
[http://yqnet.wujidao.net/console/mobile/bsGoodsInfo/viewList.yh? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&platformNum=p002&spage=1](http://yqnet.wujidao.net/console/mobile/bsGoodsInfo/viewList.yh? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&platformNum=p002&spage=1)

	平台下商品（商品详情的商品来自京东淘宝等平台 点击进去）







## 我订单界面

####全部

####列表接口

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList)

####待付款列表接口：
[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=topay&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=topay&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList)


####待收货列表接口：

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=dispatch&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=dispatch&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList)

####待评价列表接口：

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=toComment&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=toComment&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList)

####退换货列表接口：

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=torefund&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=10&spage=1&orderStatusCode=torefund&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList)


####订单详情详情接口：

[http://yqnet.wujidao.net/console/userAddress/aasubjectaddressMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=1000&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList](http://yqnet.wujidao.net/console/userAddress/aasubjectaddressMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&pageSize=1000&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewList)

####查看物流

[http://yqnet.wujidao.net/console/mobile/express.yh? mailNo=884685178249480733](http://yqnet.wujidao.net/console/mobile/express.yh? mailNo=884685178249480733)

####确认收货接口
[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=ad704f1f7f0001011f7b2d38b14a70ed&mAction=received](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=ad704f1f7f0001011f7b2d38b14a70ed&mAction=received)

####评价
[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?sessionID=009B8589C13BFEB62113E79CAC13E159.12tomcat7A&content=该商品非常好很好用&evaluateValue=5&orderGoodsId=8f2ca4a67f00010149dc7ddb49359c54&mAction=comment](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do?sessionID=009B8589C13BFEB62113E79CAC13E159.12tomcat7A&content=该商品非常好很好用&evaluateValue=5&orderGoodsId=8f2ca4a67f00010149dc7ddb49359c54&mAction=comment)
	
	当ordergoodlist里面第一条数据的orderGoodsId为参数orderGoodsId的值，拿到接口返回的evaluateId去上传图片

#### 评价列表（图文结合）
[http://yqnet.wujidao.net/console/entityEvaluate/entityevaluateMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&entityId=8a2f3ad67f0001011bcbaeb912f3dc6f&pageSize=10&spage=1&entityType=product&mAction=viewList](http://yqnet.wujidao.net/console/entityEvaluate/entityevaluateMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&entityId=8a2f3ad67f0001011bcbaeb912f3dc6f&pageSize=10&spage=1&entityType=product&mAction=viewList)

#### 取消订单

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aef1dea37f0001017dbeae2a6fe9d58d&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=cancel](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aef1dea37f0001017dbeae2a6fe9d58d&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=cancel)

#### 删除订单

[http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aef1dea37f0001017dbeae2a6fe9d58d&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=del](http://yqnet.wujidao.net/console/bsOrder/bsorderMobile.do? sessionID=D5E1587753CF901DB855759BBE7EF9B6.12tomcat7A&orderId=aef1dea37f0001017dbeae2a6fe9d58d&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=del)




#### 订单列表状态显示：
1、orderStatusCode= topay待付款，列表显示两个按钮 取消订单和支付，状态为待支付
2、待收货有两种状态，已发货和未发货
当orderStatusCode= dispatch为已发货，列表显示两个按钮 查看物流和确认收货，状态为已支付
当orderStatusCode= paid为未发货，列表两个按钮都不显示，状态为等待处理
3、orderStatusCode= finish待评价有两种状态，已评价和未评价
当ordergoodlist里面第一条数据的isComment为N，则未评价，列表显示1个按钮 评价，状态为已签收
当ordergoodlist里面第一条数据的isComment为Y，则已评价，列表两个按钮都不显示，状态为已评价


订单详情状态显示：
1、orderStatusCode= topay待付款，底部显示两个按钮 取消订单和支付，状态为待支付
2、待收货有两种状态，已发货和未发货
当orderStatusCode= dispatch为已发货，底部显示两个按钮 查看物流和确认收货，状态为已支付
当orderStatusCode= paid为未发货，底部两个按钮都不显示，状态为等待处理
3、orderStatusCode= finish待评价有两种状态，已评价和未评价
当ordergoodlist里面第一条数据的isComment为N，则未评价，底部显示1个按钮 评价，状态为已签收
当ordergoodlist里面第一条数据的isComment为Y，则已评价，底部两个按钮都不显示，状态为已评价










活动流程
活动详情：
http://yqnet.wujidao.net/console/activityInfo/activityinfoMobile.do? sessionID=EC5956704DA53CFE47F2D8D3B4ED4501.12tomcat7A&id=8f6477797f000101397513506006ae78&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=viewPublic















acstatusCode类型
A//发起中				
B//已开始
C//已结束
D//即将开始


按钮显示   参加活动
acstatusCode= A且isResponsedParticipation=N

按钮显示   活动安排
acstatusCode= A且isResponsedParticipation=Y

按钮显示   进行中..
acstatusCode= B

按钮显示   已结束
acstatusCode其他状态 

				
参加活动
价格为0时，调用参加活动接口
/activityInvite/activityinvitedinfoMobile.do? activityId=&userId=&mAction=add4Me
价格不为0，调用支付界面，输入验证码后调用支付接口
http://yqnet.wujidao.net/console/activityOrder/activityorderMobile.do? sessionID=EC5956704DA53CFE47F2D8D3B4ED4501.12tomcat7A&activityId=8f6477797f000101397513506006ae78&vcode=803508&mAction=buy

活动安排
接口
http://yqnet.wujidao.net/console/mobile/activityPlans/viewList.yh?sessionID=207E82ED3E0F7F2AEE87350896192498.12tomcat7A&activityId=8f86d0187f000101481cc4ddb23ff0e3&pageSize=10&spage=1&userId=7bfb1ab0c0a800f533b333b3193d4b1e

activityPlanStatusCode=B 并且isCheckIn=N        未签到

iactivityPlanStatusCode=B 并且sCheckIn=Y     已签到

iactivityPlanStatusCode为其他时 显示未开始

活动安排详情
http://yqnet.wujidao.net/console/mobile/activityPlans/view.yh?sessionID=207E82ED3E0F7F2AEE87350896192498.12tomcat7A&activityPlanId=a801a9e77f0001017fd77a97689828b4&userId=7bfb1ab0c0a800f533b333b3193d4b1e&mAction=view
activityPlanStatusCode=B 并且isCheckIn=N        未签到

iactivityPlanStatusCode=B 并且sCheckIn=Y     已签到

iactivityPlanStatusCode为其他时 显示活动未开始,暂不能签到

签到页面
获取签到二维码接口
/mobile/activityPlanCheckin/toCheckIn4KY.yh? activityPlanId=&mAction=toCheckIn4KY&userId=
返回的imagePath为签到二维码

扫码签到
/mobile/activityInfo/checkIn.yh?mAction=checkIn&id=&activityPlanId=&userId=
id是扫码返回的值



sdk接口调用说明
第三方接入我们sdk需要传入的值



sign的签名方式为用signType、platformI的、timeStamp和平台的platformLoginPassword生成签名



中间空白页显示文字“请等待，正在为您跳转...”并调用验证接口获取tokenId，接口如下
/mobile/platform/getAccessToken.yh?platformId=& timestamp=&signType=&signType=&sign=

2.1、platformId、timestamp、signType、sign都是用户传递过来的
2.2、接口返回AICODE =1，reInfos就是tokenId
2.3、AICODE不为1；提示reInfos的内容并且关闭当前页面
2.4、参数一定要严格按照此顺序，不可更换

3、获取兑换规则
3.1、接口
/apExchange/accumulatepointsexchangeMobile.do?platformId=&timeStamp&signType&sign=&mAction=viewRule

 	3.2、platformId、signType此两个参数为用户传递
3.3、timeStamp获取当前时间搓，sign用新获取的时间搓tokenId生成key去获取规则接口
3.4、参数一定要严格按照此顺序，不可更换


4、兑换益启币
	4.1、兑换接口
/apExchange/accumulatepointsexchangeMobile.do?vcode=&mobilePhone=&platformUserId=&accumulatePointsNumber=&platformAppTypeCode=B&platformId=&signType=&sign=&mAction=add


    4.2、    



