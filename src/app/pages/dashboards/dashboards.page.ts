import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../_services/api.service';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Swiper, Zoom } from 'swiper';
import { IonicSlides, IonSlides } from '@ionic/angular';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage extends BaseComponent implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3') slideWithNav3: Swiper;

  sliderOne: any;

  slideOpts = {
    initialSlide: 1,
    speed: 1500,
    autoplay: true,
  };

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

  public mobile: boolean;
  public assetPath = 'https://app.tymetro.com.tw/Content/App_img/backgroup/spring.gif';

  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected iab: InAppBrowser) {
    super(injector);
    this.sliderOne = {
      "Code": "0",
      "Data": {
        "LastUpdate": "2021-04-20 22:16:22",
        "BackgroupURL": "https://app.tymetro.com.tw/Content/App_img/backgroup/spring.gif",
        "banner": [
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20220331112006_0.jpg",
            "Sort": 335,
            "Title": "【桃捷公告】4月7日起，本公司配合鐵道局工程測試，微幅調整全線時刻表說明",
            "Top": 0
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20220329055848_0.jpg",
            "Sort": 337,
            "Title": "2022捷乘應猿─搭桃捷看Rakuten主場球賽享回程免費",
            "Top": 1
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20211105044512_0.jpg",
            "Sort": 332,
            "Title": "親子一日票",
            "Top": 3
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210914100924_0.jpg",
            "Sort": 304,
            "Title": "110/9/18起 班距調整公告",
            "Top": 8
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210604022611_0.jpg",
            "Sort": 325,
            "Title": "中大型寵物開放搭乘機捷",
            "Top": 12
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210224122934_0.jpg",
            "Sort": 319,
            "Title": "智慧桃捷再升級",
            "Top": 15
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20201127121335_0.jpg",
            "Sort": 315,
            "Title": "信用卡感應支付新功能",
            "Top": 18
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20201130034111_0.jpg",
            "Sort": 303,
            "Title": "進入大眾運輸系統 請全程佩戴口罩 ",
            "Top": 26
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20200315103605_0.jpg",
            "Sort": 302,
            "Title": "自行車搭機捷購票資訊",
            "Top": 36
          },
          {
            "Languag": "TW",
            "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20200304054758_0.jpg",
            "Sort": 300,
            "Title": "桃園市政府衛生局-嚴重特殊傳染性肺炎(COVID-19)",
            "Top": 38
          },
        ],
      },
    };
  }

  ngOnInit() {
    this.onHideSvg();
  }

  //Move to Next slide
  slideNext(slideView) {
    slideView.swiperRef.slideNext(1000);
  }

  //Move to previous slide
  slidePrev(slideView) {
    console.log('slideView', slideView);

    slideView.swiperRef.slidePrev(1000);
  }

  //Method called when slide is changed by drag or navigation
  onSlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    object.isBeginningSlide = slideView?.swiperRef?.isBeginning;
    console.log('object.isBeginningSlide', object);
  }
  checkisEnd(object, slideView) {
    object.isEndSlide = slideView?.swiperRef?.isEnd;
    console.log('object.isEndSlide', object);
  }

  async getNewAdvertising() {
    let resp = await this.api.getProductList();
    console.log(resp);
    //const resp = await this.api.getData();

    //resp = await this.api.login('A123456789', '123456');
    //console.log(resp);
    // 導覽頁面
    const url = 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php';
    this.goToBrowser(url);
  }

  onGoBack(event) {

  }

  async onHideSvg() {
    return window.screen.width <= 360 ? this.mobile = true : false;
  }
}
