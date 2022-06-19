import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-souvenir',
  templateUrl: './souvenir.component.html',
  styleUrls: ['./souvenir.component.scss'],
})
export class SouvenirComponent extends BaseComponent implements OnInit {

  public points: any = {};
  public souvenirs: any = [];
  public products: any = [];
  public userInfo: any = {};
  public thisYear: number;
  public lastYear: number;

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector)
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;
  }

  async ngOnInit() {
    // 取得會員資料
    this.userInfo = this.getStore('userInfo');
    // 取得點數
    this.api.getPointsByToken('1').then(resp => {
      if (resp.Code == 0) {
        this.points = resp.Data;
      } else {
        this.alert(resp.Message);
      }
    }).catch(e => {
      this.alert(e);
    });
    // 取得兌換商品
    this.api.getProductList().then(resp => {
      this.products = resp.Data;
      console.log(resp);
    }).catch(e => {
      this.alert(e);
    });
  }

  onGoBack(event) {
    this.onNavigate('/dashboards/member');
  }

}
