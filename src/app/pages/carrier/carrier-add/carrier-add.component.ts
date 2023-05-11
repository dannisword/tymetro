import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'app-carrier-add',
  templateUrl: './carrier-add.component.html',
  styleUrls: ['./carrier-add.component.scss'],
})
export class CarrierAddComponent extends BaseComponent implements OnInit {
  public title: any;
  public data: any;
  public cardNo: any;

  protected isSave = false;

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  ngOnInit() {

  }
  onClose() {
    this.dismissModal();
    this.onNavigate('dashboards/carrier');
  }
  onSave() {
    this.isSave = true;
    this.api.addVehicle(this.cardNo, this.data.Type).then(resp => {
      this.isSave = false;
      if (resp.Code == 0) {
        // 存擋
        super.dismissModal();
        this.onNavigate('dashboards/carrier');
      } else {
        this.alert(resp.Message.CreateResult);
      }
    })
  }
}
