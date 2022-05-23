import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage implements OnInit {

  public menus = [{
    name: '最新消息',
    icon:'../../../assets/dashboard/news.svg',
    url:'https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/11',
  }, {
    name: '票價時刻',
    icon: '../../../assets/dashboard/date-range.svg',
    url:'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php'
  },
  {
    name: '車站資訊',
    icon: '../../../assets/dashboard/airline.svg',
    url:'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/A1'
  },
  {
    name: '列車動態',
    icon: '../../../assets/dashboard/tran.svg'
  },
  {
    name: '路線規劃',
    icon: '../../../assets/dashboard/edit-location.svg',
    url:'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/road.html'
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
  constructor() { }

  ngOnInit() {
    this.onHideSvg();
  }

  async onNav(menu) {
    console.log(menu);
    window.location.href = 'https://github.com/google';
  }
  async onHideSvg() {
    return window.screen.width <= 360 ? this.mobile = true:false;
  }


}
