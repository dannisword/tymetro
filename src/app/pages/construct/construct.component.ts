import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-construct',
  templateUrl: './construct.component.html',
  styleUrls: ['./construct.component.scss'],
})
export class ConstructComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event) {
    this.onNavigate('/dashboards/member');
  }
}
