import { Component, Injector, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { MemberPointsComponent } from './member-points/member-points.component';
import { ApiService } from '../_services/api.service';
import { MemberRevokeComponent } from './member-revoke/member-revoke.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent extends BaseComponent implements OnInit {
  public points: any = {};
  public userInfo: any = {};
  public thisYear: number;
  public lastYear: number;

  constructor(protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  async ngOnInit() {
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;
    // 會員資料
    let resp = await this.api.reviewerMember();

    if (resp.Code != 0) {
      this.onNavigate('/dashboards/login');
      return;
    }
    if (resp.Data.Id == null) {
      this.onNavigate('/dashboards/login');
      return;
    }
    this.userInfo = resp.Data;
    this.setStore('userInfo', resp.Data);

    resp = await this.api.getPointsByToken('1');
    if (resp.Code == 0) {
      this.points = resp.Data;
    } else {
      this.alert(resp.Message);
    }
  }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }

  async onOpen(menuID) {
    if (menuID == 'cancel') {
      const options = {
        componentProps: {
          title: this.translateService.instant('撤銷帳號'),
          data: this.points
        },
        swipeToClose: true
      }
      const modelData = await this.openModal(MemberRevokeComponent, options);
    }
    if (menuID == 'points') {
      const options = {
        componentProps: {
          title: this.translateService.instant('歷史點數查詢'),
          data: this.points
        },
        swipeToClose: true
      }
      const modelData = await this.openModal(MemberPointsComponent, options);
    }

  }

  async logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('userInfo')
    this.onNavigate('/dashboards');
  }
}
