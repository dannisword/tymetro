import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss'],
})
export class CarrierComponent extends BaseComponent implements OnInit {
  public cards = [{
    cardType: '有效記名票卡', list: [{
      name: '5月定期票',
      expired: '2022-05-31'
    }, {
      name: '6月定期票',
      expired: '2022-06-30'
    }]
  }, {
    cardType: '驗證中票卡', list: [{
      name: '5月定期票',
      expired: '2022-05-31'
    }, {
      name: '6月定期票',
      expired: '2022-06-30'
    }]
  }, {
    cardType: '失效記名票卡', list: [{
      name: '5月定期票',
      expired: '2022-05-31'
    }, {
      name: '6月定期票',
      expired: '2022-06-30'
    }]
  }];
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }

  onOption() {
    this.onNavigate('/dashboards/carrier-select');
  }
}
