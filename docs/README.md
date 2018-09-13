---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /doc/
features:
- title: 接口文档
  details: 根据业务需求不断补充的接口文档，以最少的技术学习成本帮助你专注于使用。
- title: 周边配套
  details: 官方会不断推出不同的客户端，小程序、APP等。

footer: Copyright © 2018-present HanWenbo
---

### 安装PHP SDK

``` bash
composer require hanwenbo/ttlock
```
### php sdk 示例
```php
use hanwenbo\ttlock;
...

$ttlock = new TTLock($clientId,$clientSecret);
// oauth2
$ttlock->oauth2->token($username,$password,$redirect_uri);
$ttlock->oauth2->refreshToken($token,$redirect_uri);

// date is  Current time (in millisecond)
$ttlock->user->register($username,$password,$date);
// Reset password
$ttlock->user->resetPassword($username,$password,$date);

$ttlock->user->list($startDate,$endDate,$pageNo,$pageSize,$date);
$ttlock->user->delete($username,$date);

// Lock
$ttlock->lock->initialize($lockData,$date,$lockAlias);
$ttlock->lock->list($pageNo,$pageSize,$date);
$ttlock->lock->listKey($lockId,$pageSize,$date);
$ttlock->lock->deleteAllKey($lockId,$date);
$ttlock->lock->listKeyboardPwd($lockId,$pageNo,$pageSize,$date);
$ttlock->lock->changeAdminKeyboardPwd($lockId,$password,$date);
$ttlock->lock->changeDeletePwd($lockId,$password,$date);
$ttlock->lock->rename($lockId,$lockAlias,$date);
$ttlock->lock->resetKey($lockId,$date);
$ttlock->lock->resetKeyboardPwd($lockId,$pwdInfo,$timestamp,$date);
$ttlock->lock->getKeyboardPwdVersion($lockId,$date);
$ttlock->lock->updateElectricQuantity($lockId,$electricQuantity,$date);
$ttlock->lock->transfer($receiverUsername,$lockIdList,$date);
```
::: warning 注意
请确保你的PHP 版本 >= 7.2。
:::

