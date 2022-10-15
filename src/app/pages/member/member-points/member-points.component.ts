import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-member-points',
  templateUrl: './member-points.component.html',
  styleUrls: ['./member-points.component.scss'],
})
export class MemberPointsComponent extends BaseComponent implements OnInit {
  public data: any;
  public points: any;
  public userInfo: any = {};
  public title: string;
  public thisYear: number;
  public lastYear: number;
  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  async ngOnInit() {
    this.userInfo = this.getStore('userInfo');
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;
    const resp = await this.api.getPointsByToken('1');
    if (resp.Code == 0) {
      this.data = resp.Data;
      for (let point of this.data.PointRecord) {
        point.RecordTime = moment(point.RecordTime).format('YYYY/MM/DD');
      }
    } else {
      this.alert(resp.Message);
    }
  }
}
