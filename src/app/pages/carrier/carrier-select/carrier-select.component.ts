import { Component, Injector, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ModalController } from '@ionic/angular';
import { CarrierAddComponent } from '../carrier-add/carrier-add.component';
@Component({
  selector: 'app-carrier-select',
  templateUrl: './carrier-select.component.html',
  styleUrls: ['./carrier-select.component.scss'],
})
export class CarrierSelectComponent extends BaseComponent implements OnInit {
  @Input() title: string;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.title);
  }

  onGoBack(event: any) {
    this.onNavigate('/dashboards/carrier');
  }

  async onClick() {
    const options = {
      componentProps: {
        title: '載具專區'
      },
      swipeToClose: true
    }
    const modelData = await this.openModal(CarrierAddComponent, options);
    console.log(modelData);
  }

  async dismissModal() {
    super.dismissModal('CarrierAddComponent');
    //await this.modalController.dismiss('CarrierAddComponent');
  }
}
