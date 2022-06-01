import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
      { title: '首頁', url: 'dashboards', icon: 'home' },
      { title: '最新消息', url: 'dashboards/news', icon: 'megaphone' },
      { title: '票價時刻', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php', icon: 'cash' },
      { title: '路網與車站', url: '#', icon: 'navigate' },
      { title: '列車動態', url: '#', icon: 'train' },
      { title: '航班資訊', url: '#', icon: 'calendar-number' },
      { title: '票價與票種', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticket.html', icon: 'ticket' },
      { title: '沿線景點', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/life/attractions.html', icon: 'leaf' },
      { title: '路線規劃', url: '#', icon: 'golf' },
      { title: '我的最愛', url: '#', icon: 'pricetag' },
      { title: '會員專區', url: '#', icon: 'person' },
      { title: '紀念商品', url: '#', icon: 'gift' },
      { title: '設定', url: '#', icon: 'settings' },
  ];
  constructor() {}
}
