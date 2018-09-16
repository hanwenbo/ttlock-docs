## React Native 接口
```javascript
// TTLock.js
'use strict';

import { NativeModules } from 'react-native';

export default NativeModules.TTLock;

// View.js
import TTLock from './TTLock'

// 用法如：
TTLock.init()
TTLock.requestBleEnable()
TTLock.startBleService()
TTLock.startBTDeviceScan()

```
- init 初始化TTLock SDK
- requestBleEnable 看看是否有蓝牙，如果有应该会设置到静态变量里留给类下文用（自动的）
- startBleService 开启蓝牙服务
- startBTDeviceScan 扫描周边锁设备，周边的锁是不间断广播信号
- connect(String address) 链接设备 onFoundDevice 信号里会有这个参数
- disconnect 断开蓝牙链接
- unlockByUser(String uid,String lockVersion,String startDate, String endDate, String unlockKey, int lockFlagPos, String aesKeyStr, String timezoneOffset) 通过eKey进行解锁，是管理员发送给的用户，管理员开不了
  - uid : openid
  - lockVersion : json 体

## 监听信号
- onFoundDevice
```json
{
  "name" : "string",
  "address" : "string",
  "remoteUnlockSwitch" : "int",
  "lockType" : "int",
  "date" : "int",
  "parkStatus" : "int"
}
```
- onDeviceConnected
- onDeviceDisconnected
- onUnlock

## 监听示例
```javascript
import {DeviceEventEmitter} from 'react-native';
DeviceEventEmitter.addListener('EventName', function(e) {
    console.warn(e)
    alert("send success");
});
```
`EventName` 是监听的信号，如 `onFoundDevice`
`e` 是返回的数据


## 接口示例，不一定是最终版本，此处为测试时写的
- http://127.0.0.1:9511/api/key/unlockInfo?name=M101T_d83b32 
```json
{
    "code":0,
    "result":{
        "token":{
            "access_token":"2b09078e23ce82b6f13f9f12ee0d7d1a",
            "refresh_token":"f773ba2f987502b8ba977d357116aa43",
            "openid":1700436704,
            "scope":"user,key,room",
            "expires_in":7767139
        },
        "lastUpdateDate":1537113378195,
        "key":{
            "date":1537104456000,
            "specialValue":53473,
            "lockAlias":"test",
            "keyStatus":"110401",
            "endDate":1537190520000,
            "keyId":2188977,
            "lockMac":"C4:54:12:32:3B:D8",
            "timezoneRawOffset":28800000,
            "lockId":1264731,
            "electricQuantity":90,
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
            "userType":"110302",
            "lockKey":"MTE1LDExNywxMTUsMTEzLDEyMywxMTgsMTEzLDExMywxMTcsMTE1LDYx",
            "lockName":"M101T_d83b32",
            "startDate":1537104120000,
            "remarks":"",
            "keyRight":0
        }
    },
    "msg":null
}
```
