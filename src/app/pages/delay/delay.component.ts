import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss'],
})
export class DelayComponent extends BaseComponent implements OnInit {
  public delaies: any = [];

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector)
  }

  async ngOnInit() {
    const resp = await this.api.getLinkData('delay');
    if (resp.Code == 0) {
      this.delaies = resp.Data;
    } else {
      this.alert(resp.Message);
    }
  }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }
}
