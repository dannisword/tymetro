import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent extends BaseComponent implements OnInit {
  public id: string = '';
  public mail: string = '';
  public phone: string = '';
  constructor(protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event) {
    super.onBack('/dashboards/login');
  }

  async onConfirm() {
    let data = {};

    //Id, Email, Phone
    if (this.id.length <= 0) {
      this.alert('請輸入身分證號碼或護照號碼')
      return;
    }
    if (this.mail.length <= 0 && this.phone.length <= 0) {
      this.alert('Email、手機號碼請擇一選擇')
      return;
    }
    if (this.mail.length > 0) {
      data = {
        Id: this.id,
        Email: this.mail
      }
    }
    if (this.phone.length > 0) {
      data = {
        Id: this.id,
        Phone: this.phone
      }
    }
    if (this.mail.length > 0) {
      let param = {
        Id: this.id,
        Email: this.mail
      };  
      this.forgetPassword(param);
    }else{
      let param = {
        Id: this.id,
        Phone: this.phone
      };  
      this.forgetPassword(param);
    }
  }

  public forgetPassword(param) {
    this.presentLoading();
    this.api.forgetPassword(param).then(res => {
      this.onDismiss();
      if (res.Code == '0') {
        const options = {
          componentProps: {
            title: this.translateService.instant('會員專區')
          },
          swipeToClose: true
        }
        this.openModal(ConfirmComponent, options);
      } else {
        this.snackbarService.warning(res.Message);
      }
    })
  }
}
