import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-carrier-add',
  templateUrl: './carrier-add.component.html',
  styleUrls: ['./carrier-add.component.scss'],
})
export class CarrierAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event: any) {
    this.onNavigate('/dashboards/carrier-select');
  }
  
  onSave() {

  }
}
