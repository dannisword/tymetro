import { Component, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
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
  public thisYear: number;
  public lastYear: number;

  constructor(
    protected injector: Injector,
    protected api: ApiService,
    private cd: ChangeDetectorRef
  ) {
    super(injector);
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;
  }

  async ngOnInit() {
    this.userInfo = this.getStore('userInfo');
    const resp = await this.api.getPointsByToken('1');
    if (resp.Code == 0) {
      this.points = resp.Data;
    }
    this.cd.detectChanges();
    // 取得點數
    /*
    this.api.getPointsByToken('1').then(resp => {
      if (resp.Code == 0) {
        this.points = resp.Data;
        
      } else {
        this.alert('取得點數錯誤');
      }
    }).catch(e => {
      this.alert(e);
    });*/
  }
  onExchangNumber(mode) {
    if (mode == 'remove') {
      this.exchangNumber--;
    } else {
      this.exchangNumber++;
    }
    if (this.exchangNumber <= 0) {
      this.exchangNumber = 0;
      return;
    }
  }
  onExchang() {
    if (this.points.PointTotal <= 0) {
      this.confirm('兌換點數不足');
      return;
    }
    if (this.exchangNumber <= 0) {
      this.confirm('請輸入兌換數量');
      return;
    }
    let param = {
      Token: localStorage.getItem('Token'),
      Product: {
        ProductId: this.data.ProductId,
        Qty: this.exchangNumber.toString()
      },
      Recipient: {
        Name: this.userInfo.Name,
        PhoneNumber: this.userInfo.PhoneNumber,
        Address: this.userInfo.Address
      }
    }

    this.api.redeemProduct(param).then(resp => {
      if (resp.Code == '0') {
        //this.dismissModal();
      } else {
        this.snackbarService.warning(resp.Message);
      }
    });
  }
}
