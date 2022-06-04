import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
@Component({
  selector: 'app-carrier-add',
  templateUrl: './carrier-add.component.html',
  styleUrls: ['./carrier-add.component.scss'],
})
export class CarrierAddComponent extends BaseComponent implements OnInit {

  public cardNo: any;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }

  onSave() {
    // 存擋
    super.dismissModal(this.cardNo);
  }
}
