import { Component, Injector, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-abnormal',
  templateUrl: './abnormal.component.html',
  styleUrls: ['./abnormal.component.scss'],
})
export class AbnormalComponent extends BaseComponent implements OnInit {
  private interval: any;
  constructor(
    protected injector: Injector,
    protected api: ApiService
  ) {
    super(injector);
  }

  async ngOnInit() {
    // 監聽事件
    Network.addListener('networkStatusChange', async status => {
      if (status.connected == false) {
        await this.handlerNetwork();
      }
    });
    await this.handlerNetwork();

    //this.presentLoading();
    // 取得最新消息
    this.api.getNewAdvertising('10', 'TW').then(resp => {
      if (resp.Code == '0') {
        this.setStore('backgroupURL', resp.Data.BackgroupURL);
        this.setStore('banner', resp.Data.banner);
      } 
    }).finally(()=>{
      //this.onDismiss();
    });
  }

  async handlerNetwork() {
    await this.present();
    this.interval = setInterval(async () => {
      await this.handler();
    }, 2000)
  }
  onBack() {
    super.onBack('/dashboards/home');
  }

  async present() {
    const loading = await this.loadingController.create({
      message: '連線中....',
      duration: 10000,
    });
    await loading.present();
  }

  async dismiss() {
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async handler() {
    const status = await Network.getStatus();
    if (status.connected == true) {
      clearInterval(this.interval);
      super.onBack('/dashboards');
      await this.dismiss();
    }
  }
}
