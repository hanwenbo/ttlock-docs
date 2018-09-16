# PHP 接口
## 安装
```bash
composer require hanwenbo/ttlock
```
## 业务逻辑介绍
思路和我们的im差不多，服务端通过oauth2.0授权，拿到用户token进行获取资源
本次开发是同步我们的用户到ttlock用户（模拟账号和密码），一个管理员进行初始化锁具绑定锁具，其他用户开锁由管理员去发送eKey给用户，用户拿到开锁所需要的开锁数据。


每个锁对应一个mac地址

客户下单成功后，管理员将Send ekey给用户
然后用户通过Sync the ekey data开锁
订单失效 定时清理Delete ekey


我们创建 ttlock_ekey表   ttlock_lock表
订单表主要加个 ttlock_ekey_delete  用来记录是否已经删除了权限

ttlock_ekey 用来记录给用户下发的ekey信息

定时任务帮助未完成的订单去发送未发送的ekey订单，
 
用户开锁的时候，使用用户的token去拉取，然后判断哪个是属于当前的ekey，然后发给用户，用户进行开锁， + openid，如果没有返回原因：1.锁不存在 2.不存在的开锁权限



定时任务帮助订单去清理ekey_delete
 


```json
{
    "code":0,
    "result":{
        "lastUpdateDate":1537103033987,
        "keyList":[
            {
                "date":1536892315000,
                "specialValue":53473,
                "lockAlias":"test",
                "keyStatus":"110401",
                "endDate":0,
                "noKeyPwd":"1939493",
                "keyId":2172865,
                "lockMac":"C4:54:12:32:3B:D8",
                "deletePwd":"",
                "timezoneRawOffset":28800000,
                "lockId":1264731,
                "electricQuantity":90,
                "adminPwd":"OTgsOTYsMTAyLDk2LDEwMywxMDIsOTcsOTYsMTAwLDk3LDQ0",
                "lockFlagPos":0,
                "keyboardPwdVersion":4,
                "aesKeyStr":"4c,27,28,ae,66,82,39,b2,3b,bf,3d,41,78,d7,13,b7",
                "remoteEnable":2,
                "lockVersion":{
                    "showAdminKbpwdFlag":true,
                    "groupId":1,
                    "protocolVersion":3,
                    "protocolType":5,
                    "orgId":1,
                    "logoUrl":"",
                    "scene":2
                },
                "userType":"110301",
                "lockKey":"MTE1LDExNywxMTUsMTEzLDEyMywxMTgsMTEzLDExMywxMTcsMTE1LDYx",
                "lockName":"M101T_d83b32",
                "startDate":0,
                "remarks":"",
                "keyRight":0
            }
        ]
    },
    "msg":null
}
```
