import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-carrier-select',
  templateUrl: './carrier-select.component.html',
  styleUrls: ['./carrier-select.component.scss'],
})
export class CarrierSelectComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector) {
    super(injector)
  }

  ngOnInit() { }

  onGoBack(event: any) {
    this.onNavigate('/dashboards/carrier');
  }
  
  onClick() {
    this.onNavigate('/dashboards/carrier-add');
  }
}
