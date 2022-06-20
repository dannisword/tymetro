import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ModalController } from '@ionic/angular';
import { CarrierSelectComponent } from './carrier-select/carrier-select.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss'],
})
export class CarrierComponent extends BaseComponent implements OnInit {
  public cards: any = [];
  public userInfo: any = {};

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  ngOnInit() {
    this.userInfo = this.getStore('userInfo');

    //取得使用者載具
    this.api.getMemberVehicle().then(resp => {
      console.log(resp);
      if (resp.Code == '0') {
        this.cards = resp.Data;
      } else {
        this.snackbarService.success('目前無票卡資料');
      }
    })

  }

  onGoBack(event) {
    super.onBack('dashboards/member');
  }

  async onAction() {
    const options = {
      componentProps: {
        title: this.translateService.instant('請選擇您現有的票卡')
      },
      swipeToClose: true
    }
    const modelData = await this.openModal(CarrierSelectComponent, options);
    // 回傳值
    console.log(modelData);
  }
}
