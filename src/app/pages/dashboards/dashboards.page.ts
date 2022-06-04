import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage extends BaseComponent implements OnInit {


  public menus = [{
    name: '最新消息',
    icon: '../../../assets/dashboard/news.svg',
    url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/11',
  }, {
    name: '票價時刻',
    icon: '../../../assets/dashboard/date-range.svg',
    url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php'
  },
  {
    name: '車站資訊',
    icon: '../../../assets/dashboard/airline.svg',
    url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A1'
  },
  {
    name: '列車動態',
    icon: '../../../assets/dashboard/tran.svg'
  },
  {
    name: '路線規劃',
    icon: '../../../assets/dashboard/edit-location.svg',
    url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/road.html'
  },
  {
    name: '紀念商品',
    icon: '../../../assets/dashboard/gift.svg'
  },
  ];
  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public mobile: boolean;
  public assetPath= 'https://app.tymetro.com.tw/Content/App_img/backgroup/spring.gif';

  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected iab: InAppBrowser) {
    super(injector);
  }

  ngOnInit() {
    this.onHideSvg();
  }

  async getNewAdvertising() {
    //const resp = await this.api.getProductList();
    //console.log(resp);
    //const resp = await this.api.getData();

    //const resp = await this.api.login('A123456789', '123456');
    //const resp = await this.api.getProductList();
    // 導覽頁面
    const url = 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php';
    this.onNav(url);
  }


  async onHideSvg() {
    return window.screen.width <= 360 ? this.mobile = true : false;
  }
}
