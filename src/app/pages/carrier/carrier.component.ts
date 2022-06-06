import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ModalController } from '@ionic/angular';
import { CarrierSelectComponent } from './carrier-select/carrier-select.component';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss'],
})
export class CarrierComponent extends BaseComponent implements OnInit {
  public cards = [{
    cardType: '有效記名票卡', list: [{
      name: '定期票',
      expired: '2022-05-31'
    }, {
      name: '定期票',
      expired: '2022-06-30'
    }]
  }, {
    cardType: '驗證中票卡', list: [{
      name: '定期票',
      expired: '2022-05-31'
    }, {
      name: '定期票',
      expired: '2022-06-30'
    }]
  }, {
    cardType: '失效記名票卡', list: [{
      name: '定期票',
      expired: '2022-05-31'
    }, {
      name: '定期票',
      expired: '2022-06-30'
    }]
  }];
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event) {
    super.onBack('dashboards/member');
  }

  async onOption() {
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
