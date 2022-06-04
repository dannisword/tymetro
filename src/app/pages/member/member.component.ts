import { Component, Injector, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/_shared/component/base/base.component';
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
    this.onBack('/dashboards');
  }
}
