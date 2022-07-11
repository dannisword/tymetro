import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.scss'],
})
export class ProductConfirmComponent extends BaseComponent implements OnInit {
  public userInfo: any;
  public product: any;
  public redeemProduct: any;
  public redeem: boolean = false;
  public redeemName: any = '兌換';
  public points: any;
  constructor(
    protected injector: Injector,
    protected api: ApiService
  ) {
    super(injector);
  }

  async ngOnInit() {
    this.userInfo = this.getStore('userInfo');
    this.product = this.getStore('product');
    this.redeemProduct = this.getStore('redeemProduct');
    // 取得個人點數
    const resp = await this.api.getPointsByToken('1');

    if (resp.Code == 0) {
      this.points = resp.Data;
    }
  }

  onGoBack(event) {
    this.onNavigate('/dashboards/product-exchange');
  }
  onRedeem() {
    if (this.redeem == true) {
      const point = this.product.Point * this.redeemProduct.Product.Qty;

      if (this.points.PointTotal <= 0 || this.points.PointTotal <= point) {
        this.confirm('兌換點數不足');
        return;
      }

      if (this.redeemProduct.Product.Qty <= '0') {
        this.confirm('請輸入兌換數量');
        return;
      }
      let param = {
        Token: localStorage.getItem('Token'),
        Product: {
          ProductId: this.product.ProductId,
          Qty: this.redeemProduct.Product.Qty
        },
        Recipient: {
          Name: this.userInfo.Name,
          PhoneNumber: this.userInfo.Tel,
          Address: this.userInfo.Address
        }
      }
      this.api.redeemProduct(param).then(resp => {
        if (resp.Code == '0') {
          this.confirm('兌換成功').then(res=>{
            this.onNavigate('/dashboards/product');
          })
        } else {
          this.snackbarService.warning(resp.Message);
        }
      });
      
      return;
    }
    this.redeem = true;
    this.redeemName = '確認';

  }
}
