import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage implements OnInit {

  public menus = [{
    name: '最新消息',
  }, {
    name: '票價時刻'
  }];
  constructor() { }

  ngOnInit() {
  }

}
