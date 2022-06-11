## capacitor 環境設定(擇一)  
$ npm install @capacitor/ios  
$ npm install @capacitor/android  
$ npx cap add ios  
$ npx cap add android  

## ionic 環境設定(擇一)  
$ ionic capacitor add ios  
$ ionic capacitor build ios --prod  

## 多國
npm install @ngx-translate/core
npm install @ngx-translate/http-loader
## 
$ npm install cordova-plugin-inappbrowser 
$ npm install @awesome-cordova-plugins/in-app-browser 
## 執行
ionic seve  

## 編譯
$ ionic build  
$ npx cap sync ios  
$ npx cap open ios   

$ npx cap sync android 
$ npx cap open android 

## Apple chip M1 pod install CocoaPod
執行下面指令  
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
載具專區
ionic generate component pages/carrier
ionic generate component pages/carrier/carrier-select
ionic generate component pages/carrier/carrier-add

ionic generate component pages/login
ionic generate component pages/login/forgot
ionic generate component pages/login/confirm