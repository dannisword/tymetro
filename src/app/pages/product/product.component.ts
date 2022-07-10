import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';
import { ProductExchangeComponent } from './product-exchange/product-exchange.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends BaseComponent implements OnInit {
  public points: any = {};
  public products: any = [];
  public userInfo: any = {};
  public thisYear: number;
  public lastYear: number;

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;
  }

  async ngOnInit() {
    // 取得會員資料
    this.userInfo = this.getStore('userInfo');
    await this.reload();
  }

  async reload() {
    // 取得點數
    this.api.getPointsByToken('1').then(resp => {
      if (resp.Code == 0) {
        this.points = resp.Data;
      } else {
        this.alert('取得點數錯誤');
      }
    }).catch(e => {
      this.alert(e);
    });
    // 取得兌換商品
    this.api.getProductList().then(resp => {
      if (resp.Code == 0) {
        this.products = resp.Data;
      } else {
        this.alert('取得兌換商品錯誤');
      }
    }).catch(e => {
      this.alert(e);
    });
  }

  onGoBack(event) {
    this.onNavigate('/dashboards/member');
  }
  async onClick(product) {
    const options = {
      componentProps: {
        title: this.translateService.instant('兌換專區'),
        data: product
      },
      swipeToClose: true
    }
    const modelData = await this.openModal(ProductExchangeComponent, options);
 
  }
}
