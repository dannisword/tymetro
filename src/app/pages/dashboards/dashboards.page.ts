import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../_services/api.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Swiper, Zoom } from 'swiper';
import { IonicSlides, IonSlides } from '@ionic/angular';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { AppLauncher } from '@capacitor/app-launcher';

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

  slideOpts = {
    initialSlide: 1,
    speed: 1500,
    autoplay: true,
  };

  public menus = [];
  public banner = [];
  public mobile: boolean;
  public statusText: any = null;
  public backgroupURL = 'https://app.tymetro.com.tw/Content/App_img/backgroup/spring.gif';

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  async ngOnInit() {
    this.mobile = window.screen.width <= 360 ? true : false;
    const data = await this.api.getData();
    this.menus = data.Menus;
    // 恢復執行
    this.platform.resume.subscribe(async () => {
      this.reload();
    });
    await this.reload();
  }

  async reload() {
    this.statusText = null;
    // 取得目前營運狀態
    await this.getNowStatus();
    // 取得最新消息
    let resp = await this.api.getNewAdvertising('10', 'TW');
    if (resp.Code == '0') {
      this.setStore('backgroupURL', resp.Data.BackgroupURL);
      this.setStore('banner', resp.Data.banner);
    }
    await this.getImportant();
    // 取出 localStorage 紀錄
    this.backgroupURL = this.getStore('backgroupURL');
    this.banner = this.getStore('banner');
  }

  onAction(event) {
    const token = localStorage.getItem('Token');
    if (token == null) {
      this.onNavigate('/dashboards/login');
    } else {
      this.onNavigate('/dashboards/member');
    }
  }

  //Move to Next slide
  slideNext(slideView) {
    slideView.swiperRef.slideNext(1000);
  }

  //Move to previous slide
  slidePrev(slideView) {
    slideView.swiperRef.slidePrev(1000);
  }

  //Method called when slide is changed by drag or navigation
  onSlideDidChange(object, slideView) {
    object.isBeginningSlide = slideView?.swiperRef?.isBeginning;
    object.isEndSlide = slideView?.swiperRef?.isEnd;
  }

  async getNowStatus() {
    const resp = await this.api.getNowStatus('TW');
    if (resp.Code == '0') {
      this.statusText = resp.Data.StatusText;
    }
  }

  async getImportant() {
    const resp = await this.api.getImportant('TW');
    if (resp.Code == '0') {
    }
  }

  async onLinkApp(){

    const  value  = await AppLauncher.canOpenUrl({ url: 'com.android.chrome' });
  }
  
  async getNewAdvertising() {
    // 導到App todo
    const url = 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php';
    this.goToBrowser(url);
  }
}
