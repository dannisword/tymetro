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

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.data);
  }

  onSave() {
    this.api.addVehicle(this.cardNo, this.data.Type).then(resp => {
      console.log(resp);
      if (resp.Code == 0) {
        // 存擋
        super.dismissModal(this.cardNo);
      }else{
        this.alert('新增載具失敗');
      }
    })
  }
}
