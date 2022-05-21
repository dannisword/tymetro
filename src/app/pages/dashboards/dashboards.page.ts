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
  },
  {
    name: '車站資訊'
  },
  {
    name: '列車動態'
  },
  {
    name: '路線規劃'
  },
  {
    name: '紀念商品'
  },
  ];
  constructor() { }

  ngOnInit() {
  }

  async onNav(menu) {
    console.log(menu);
    window.location.href = 'https://github.com/google';
  }
}
