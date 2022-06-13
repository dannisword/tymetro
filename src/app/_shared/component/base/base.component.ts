import { Component, Injector, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export abstract class BaseComponent {
  public platform: Platform;
  public alertController: AlertController;
  public translateService: TranslateService;
  public inAppBrowser: InAppBrowser;
  public changeDetectorRef: ChangeDetectorRef;
  public route: ActivatedRoute;
  public router: Router;
  public modalController: ModalController;
  public location: Location;
  public snackbarService: SnackbarService;

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
    this.platform = injector.get(Platform);
    this.alertController = injector.get(AlertController);
    this.translateService = injector.get(TranslateService);
    this.inAppBrowser = injector.get(InAppBrowser);
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.location = injector.get(Location);
    this.modalController = injector.get(ModalController);
    this.snackbarService = injector.get(SnackbarService);
    this.onInit();
  }

  onInit() {
    this.translateService.use('zh');
  }
  public async goToBrowser(url) {
    let target = "_blank";
    this.inAppBrowser.create(url, target, this.options);
  }

  public onBack(url?: any) {

    if (url === undefined) {
      this.location.back();
      return;
    }
    this.onNavigate(url);
  }

  protected async onNavigate(url) {
    await this.router.navigate([url], { replaceUrl: true });
  }

  async dismissModal(data?: any) {
    if (data === undefined) {
      data = 'Default Result'
    }
    await this.modalController.dismiss(data, 'close');
  }

  async openModal(pageEl, opts) {
    return new Promise((resolve) => {
      this.modalController.create({
        component: pageEl,
        ...opts,
      }).then(modal => {
        modal.onDidDismiss().then(res => {
          resolve(res);
        });
        modal.present();
      });
    })
  }

  public confirm(msg: string) {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: '訊息確認',
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

  public async alert(msg: string) {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: '警告訊息',
        message: msg,
        buttons: [{
          text: '確認',
          handler: () => {
            resolve(true);
          }
        }]
      });
      alert.present();
    });
  }

  public setStore(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  public getStore(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }
}
