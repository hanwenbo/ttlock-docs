# Android SDK
## Download SDK & Demo
Android SDK:
[https://github.com/ttlock/Android_TTLock_Demo](https://github.com/ttlock/Android_TTLock_Demo)

## Integration description
### IDE
- Android Studio
- Minimum SDK Version: 18
### 清单配置
- 使用许可权
- 蓝牙许可
```xml
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

- 网络许可
```xml
<uses-permission android:name="android.permission.INTERNET" /> 
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```
- 注册蓝牙服务
```xml
<service android:name="com.ttlock.bl.sdk.service.BluetoothLeService" />
```
- 注册设备固件升级服务
```xml
<service android:name="com.ttlock.bl.sdk.service.DfuService" />
```
