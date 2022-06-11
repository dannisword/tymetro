import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-member-points',
  templateUrl: './member-points.component.html',
  styleUrls: ['./member-points.component.scss'],
})
export class MemberPointsComponent extends BaseComponent implements OnInit {
  public data: any;
  public title: string;
  public thisYear: number;
  public lastYear: number;
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.thisYear = new Date().getFullYear();
    this.lastYear = new Date().getFullYear() + 1;

    console.log(this.data);
  }

}
