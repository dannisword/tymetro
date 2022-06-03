import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export abstract class BaseComponent {
  public platForm: Platform;
  public alertController: AlertController;
  public changeDetectorRef: ChangeDetectorRef;

  constructor(protected injector: Injector) {
    this.platForm = injector.get(Platform);
    this.alertController = injector.get(AlertController);
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
    this.onInit();
  }

  onInit() { }

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
