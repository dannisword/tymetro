import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-product-exchange',
  templateUrl: './product-exchange.component.html',
  styleUrls: ['./product-exchange.component.scss'],
})
export class ProductExchangeComponent extends BaseComponent implements OnInit {
  public data: any;
  public exchangNumber: number = 0;
  public points: any = {};
  public userInfo: any = {};
  constructor(
    protected injector: Injector,
    protected api: ApiService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.userInfo = this.getStore('userInfo');
    // 取得點數
    this.api.getPointsByToken('1').then(resp => {
      if (resp.Code == 0) {
        this.points = resp.Data;
        console.log(this.points)
      } else {
        this.alert('取得點數錯誤');
      }
    }).catch(e => {
      this.alert(e);
    });
  }
  onExchangNumber(mode) {
    if (mode == 'remove') {
      this.exchangNumber--;
    }else{
      this.exchangNumber++;
    }
    if (this.exchangNumber <= 0) {
      this.exchangNumber = 0;
      return;
    }
  }
  onExchang() {
    console.log(this.data);
  }
}
