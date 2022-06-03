## capacitor 環境設定(擇一)  
$ npm install @capacitor/ios  
$ npm install @capacitor/android  
$ npx cap add ios  
$ npx cap add android  

## ionic 環境設定(擇一)  
$ ionic capacitor add ios  
$ ionic capacitor build ios --prod  

## 執行
ionic seve  

## 編譯
$ ionic build  
$ npx cap sync ios  
$ npx cap open ios   

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