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
- unlockByUser(int uid,String lockVersion,int startDate, int endDate, String unlockKey, int lockFlagPos, String aesKeyStr, int timezoneOffset) 通过eKey进行解锁，是管理员发送给的用户，管理员开不了
> unlockByUser uid 是 服务器端返回的openid 其他字段是服务端根据同步关联锁具列表后下发给客户端的设备信息

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
