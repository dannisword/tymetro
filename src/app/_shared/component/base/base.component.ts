import { Component, Injector, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export abstract class BaseComponent {
  public platForm: Platform;
  public alertController: AlertController;
  public translateService: TranslateService;
  public inAppBrowser: InAppBrowser;
  public changeDetectorRef: ChangeDetectorRef;

  private options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: '關閉', //iOS only
    closebuttoncolor: '#f3e5f5',
    toolbarcolor: '#7b1fa2',
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    toolbarposition: 'top',
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    //presentationstyle: 'pagesheet',//iOS only  
    fullscreen: 'no',//Windows only Ｘ
  };

  constructor(protected injector: Injector) {
    this.platForm = injector.get(Platform);
    this.alertController = injector.get(AlertController);
    this.translateService = injector.get(TranslateService);
    this.inAppBrowser = injector.get(InAppBrowser);
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
    this.onInit();
  }

  onInit() { 
    //this.translateService.use('en');
  }
 public async onNav(url){
  let target = "_blank";
  //const url = 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php';
  this.inAppBrowser.create(url, target, this.options);
 }
  public async confirm(msg: string) {
    return await this.presentAlert('提示訊息', msg);
  }

  public async alert(msg: string) {
    console.log(msg);
    return await this.presentAlert('警告訊息', msg);
  }

  private async presentAlert(header, msg) {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: header,
        message: msg,
        buttons: [{
          text: '取消',
          role: 'cancel',
          handler: () => {
            resolve(false);
          }
        }, {
          text: '確認',
          handler: () => {
            resolve(true);
          }
        }]
      });
      alert.present();
    });
  }
}
