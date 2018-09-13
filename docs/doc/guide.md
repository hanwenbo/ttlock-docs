# 开发指南
## APP集成开发指南
### 1.1 概述
- TTLock是一款拥有完全自主知识产权的软硬件结合的门锁产品，通过手机 APP替代传统的钥匙实现开门。 
- 针对合作伙伴系统定制的需求，TTLock提供了开放平台 Open API 和 APP SDK。合作伙 伴可方便地在自己的应用系统和 APP中集成TTLock的各项功能。 
- 本文档对 APP的集成开发进行说明。 

### 1.2 应用架构
系统应用架构如下图所示。 
![img](http://open.ttlock.com.cn/commons/images/open/architecture.gif)

- APP借助SDK通过蓝牙与锁通信，实现锁的初始化、开锁、读取锁操作记录等；
- 建议APP不直接调用开放平台的Open API，由APP后台应用系统与Open API交互，并暴露相应的接口给APP。
- 应用系统通过通通锁开放平台提供的 Open API 与通通锁平台实现用户绑定和授权，并进行门锁、电子钥匙以及键盘密码的管理。 
### 1.3 开发步骤
（1）注册开发者账号并创建应用，得到client_id和client_secret。

（2）APP里导入SDK开发包，调用其中的方法，并实现相应的回调方法。注：SDK请到开放平台qq群里下载。 

（3）APP后台服务端应用系统通过Open API注册用户。
 
（4）APP后台服务端应用系统通过Open API获取访问令牌。
 
（5）携带访问令牌，就可以调用Open API的锁、钥匙、密码相关接口，具体的请参考后续应用流程。

### 1.4 应用流程
- 系统涉及的主要流程包括：初始化门锁，电子钥匙开锁
#### 1.4.1 绑定门锁
![img](http://open.ttlock.com.cn/commons/images/open/binddingAdmin.jpg)
- 管理员使用APP实现对门锁的初始化设置，并通过应用系统将门锁信息传给开放平台。
- 应用系统可以对房间和门锁进行关联。
#### 1.4.2 电子钥匙发放及开锁
![img](http://open.ttlock.com.cn/commons/images/open/keyUnlock.jpg)
- 应用系统向用户发送带有时效的电子钥匙。
- 用户使用APP从服务端同步获取钥匙，并进行开门。

