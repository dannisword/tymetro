import { Component, Injector, OnInit } from '@angular/core';
import { Condition } from 'selenium-webdriver';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-member-revoke',
  templateUrl: './member-revoke.component.html',
  styleUrls: ['./member-revoke.component.scss'],
})
export class MemberRevokeComponent extends BaseComponent implements OnInit {
  public userInfo: any;
  public title: string;

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  ngOnInit() {
    this.userInfo = this.getStore('userInfo');

  }
  async onExec(action) {

    if (action == 'close') {
      this.dismissModal();
    }
    if (action == 'revoke') {
      const params = {
        Token: localStorage.getItem('Token')
      }
      this.api.deleteMember(params).then(resp => {
        if (resp.Code != 0) {
          this.alert(resp.Message);
        } else {
          this.dismissModal();
          localStorage.removeItem('Token');
          localStorage.removeItem('userInfo')
          this.onNavigate('/dashboards');
        }
      })
    }
  }
}
