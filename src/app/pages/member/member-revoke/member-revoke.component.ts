import { Component, Injector, OnInit } from '@angular/core';
import { Condition } from 'selenium-webdriver';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-member-revoke',
  templateUrl: './member-revoke.component.html',
  styleUrls: ['./member-revoke.component.scss'],
})
export class MemberRevokeComponent extends BaseComponent implements OnInit {
  public userInfo: any;
  public title: string;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.userInfo = this.getStore('userInfo');

  }
  onExec(action) {
    
    if (action == 'close') {
      this.dismissModal();
    }
    if (action == 'revoke'){
      console.log(action);
    }
  }
}
