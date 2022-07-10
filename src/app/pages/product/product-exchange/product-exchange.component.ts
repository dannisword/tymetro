import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';
import { ProductConfirmComponent } from '../product-confirm/product-confirm.component';
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
  public opened: any = false;
  public redeem: any = false;
  constructor(
    protected injector: Injector,
    protected api: ApiService
  ) {
    super(injector);
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;
  }

  async ngOnInit() {
    this.userInfo = this.getStore('userInfo');
    this.data = this.getStore('product');
    // 取得個人點數
    const resp = await this.api.getPointsByToken('1');

    if (resp.Code == 0) {
      this.points = resp.Data;
    }
  }

  onGoBack(event) {
    this.onNavigate('/dashboards/product');
  }
  onClose() {
    this.opened = false;
  }
  changValue(type, event) {

    if (type == 1) {
      this.userInfo.Name = event.target.value;
    }
    if (type == 2) {
      this.userInfo.Tel = event.target.value;
    }
    if (type == 3) {
      this.userInfo.Address = event.target.value;
    }
  }
  onRedeem() {
    if (this.points.PointTotal <= 0 || this.points.PointTotal <= this.data.Point) {
      this.confirm('兌換點數不足');
      return;
    }

    if (this.exchangNumber <= 0) {
      this.confirm('請輸入兌換數量');
      return;
    }

    if (this.redeem == false) {
      this.redeem = true;
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
        this.opened = false;
        this.confirm('兌換成功');
      } else {
        this.snackbarService.warning(resp.Message);
      }
    });
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
  async onExchang() {
    this.opened = true;
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
    this.setStore('redeemProduct', param);
    this.onNavigate('/dashboards/product-confirm');
    return;
    if (this.points.PointTotal <= 0 || this.points.PointTotal <= this.data.Point) {
      this.confirm('兌換點數不足');
      //return;
    }

    if (this.exchangNumber <= 0) {
      this.confirm('請輸入兌換數量');
      return;
    }

    const Product = {
      ProductId: this.data.ProductId,
      Qty: this.exchangNumber.toString()
    }
    const options = {
      componentProps: {
        title: this.translateService.instant('兌換專區'),
        data: Product
      },
      swipeToClose: true
    }
    const modelData = await this.openModal(ProductConfirmComponent, options);
  }
}
