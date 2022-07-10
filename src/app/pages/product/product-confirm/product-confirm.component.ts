import { Component, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.scss'],
})
export class ProductConfirmComponent extends BaseComponent implements OnInit {
  public data: any;
  public userInfo: any = {};
  public redeem: any = false;
  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected cd: ChangeDetectorRef
  ) {
    super(injector);
  }

  ngOnInit() {
    this.userInfo = this.getStore('userInfo');

    /*
    let param = {
      Token: localStorage.getItem('Token'),
      Product: {
        ProductId: this.data.ProductId,
        Qty: this.data.exchangNumber
      },
      Recipient: {
        Name: this.userInfo.Name,
        PhoneNumber: this.userInfo.PhoneNumber,
        Address: this.userInfo.Address
      }
    }*/
  }

  onRedeem() {
    this.redeem = true;
  }

  onClick() {
    this.api.redeemProduct(this.data).then(resp => {
      if (resp.Code == '0') {
        //this.dismissModal();
      } else {
        this.snackbarService.warning(resp.Message);
      }
    });
  }
}
