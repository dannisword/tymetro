import { Component, Injector, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ModalController } from '@ionic/angular';
import { CarrierAddComponent } from '../carrier-add/carrier-add.component';
import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'app-carrier-select',
  templateUrl: './carrier-select.component.html',
  styleUrls: ['./carrier-select.component.scss'],
})
export class CarrierSelectComponent extends BaseComponent implements OnInit {
  @Input() title: string;
  public vehicleTypes: any = [];
  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  async ngOnInit() {
    this.api.getVehicleType('TW').then(resp => {
      if (resp.Code == '0') {
        this.vehicleTypes = resp.Data.Carrier.filter(x=> x.Type == 1);
      } else {
        this.alert('我的票卡查詢失敗');
      }
    });
  }

  onGoBack(event: any) {
    this.onNavigate('/dashboards/carrier');
  }

  async onClick(vehicleType) {
    const options = {
      componentProps: {
        title: '我的票卡',
        data: vehicleType
      },
      swipeToClose: true
    }
    const modelData = await this.openModal(CarrierAddComponent, options);
    this.onGoBack(null);
  }

  async dismissModal() {
    super.dismissModal('CarrierAddComponent');
    //this.onGoBack(null);
    //await this.modalController.dismiss('CarrierAddComponent');
  }
}
