## 安裝套件
```
$ npm i @ionic-native/core  
$ npm i @ionic-native/date-picker  
```

## capacitor 環境設定(擇一)  
```
$ npm install @capacitor/ios  
$ npm install @capacitor/android  
$ npx cap add ios  
$ npx cap add android  
```

## ionic 環境設定(擇一)  
```
$ ionic capacitor add ios  
$ ionic capacitor build ios --prod  
```

## 多國
npm install @ngx-translate/core
npm install @ngx-translate/http-loader
## 
$ npm install cordova-plugin-inappbrowser 
$ npm install @awesome-cordova-plugins/in-app-browser 
$ npm install @awesome-cordova-plugins/core
$ npm install cordova-plugin-datepicker
$ npm install @capacitor/app-launcher
## input-mask  
$ npm i @thiagoprz/ionic-input-mask
## 執行
ionic serve  

## 編譯
$ ionic build ios
$ npx cap copy ios 
$ npx cap sync ios  
$ npx cap open ios   

## Apple chip M1 pod install CocoaPod
執行下面指令  
$ sudo gem install cocoapods
$ sudo arch -x86_64 gem install ffi  
$ arch -x86_64 pod install  
 

## 共用元件
ionic generate component _shared/component/header
ionic generate component _shared/component/base

## 服務
ionic generate service _shared/services/snackbar

## api 服務
ionic generate service pages/_services/api

## moduel or class
ionic generate class --skip-tests pages/_module/lang

## component
ionic generate component pages/construct
member
ionic generate component pages/member
ionic generate component pages/member-modify
ionic generate component pages/member-points
ionic generate component pages/member/chang-password
ionic generate component pages/member/member-revoke
我的票卡
ionic generate component pages/carrier
ionic generate component pages/carrier/carrier-select
ionic generate component pages/carrier/carrier-add

ionic generate component pages/login
ionic generate component pages/login/forgot
ionic generate component pages/login/confirm
ionic generate component pages/login/register

ionic generate component pages/souvenir
ionic generate component pages/product
ionic generate component pages/product/product-exchange
ionic generate component pages/product/product-confirm
ionic generate component pages/abnormal
ionic generate component pages/delay
ionic generate component pages/activities


## Generate ICON 
$ npm install -g cordova-res
$ ionic cordova resources
### 產生圖示
$ ionic cordova resources --icon
$ ionic cordova resources --splash
### 複製圖示
$ cordova-res ios --skip-config --copy --type icon
$ cordova-res android --skip-config --copy --type icon

## Generate APK
$ ionic build android
$ npx cap copy android 
$ npx cap sync android 
$ npx cap open android 

### defaultConfig
versionCode
versionName 

### Allowing Cleartext Traffic
<application
    ...
    android:usesCleartextTraffic="true">


## Android 
Keyalies: tymetro/Qwer890@

- 更新版本
版號要修改
A124533570/ oooo0000
https://www.tymetro.com.tw/app/mangment/uploadFile/productImage/4563d90c-0bfb-4fff-bbff-af01b27b7783.png

- AppLink
MainActivity 加入
```
public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // ATTENTION: This was auto-generated to handle app links.
    Intent appLinkIntent = getIntent();
    String appLinkAction = appLinkIntent.getAction();
    Uri appLinkData = appLinkIntent.getData();
  }
}
```