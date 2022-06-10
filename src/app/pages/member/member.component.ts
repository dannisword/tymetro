import { Component, Injector, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { MemberModifyComponent } from './member-modify/member-modify.component';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }

  async onOpen(menuID) {
    if (menuID = 'MemberEdit') {

      /*
      const options = {
        componentProps: {
          title: this.translateService.instant('會員資料修改')
        },
        swipeToClose: true
      }
      const modelData = await this.openModal(MemberModifyComponent, options);
      // 回傳值
      console.log(modelData);*/
    }
  }
  logout() {
    localStorage.removeItem('Token');
    this.onNavigate('/dashboards');
  }
}
