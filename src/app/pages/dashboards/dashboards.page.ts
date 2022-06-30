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
  public selectBanner = {};
  public mobile: boolean;
  public opened: boolean = false;
  public statusText: any = null;
  public title: any;
  public backgroupURL = 'https://app.tymetro.com.tw/Content/App_img/backgroup/spring.gif';

  constructor(
    protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  async ngOnInit() {
    this.mobile = window.screen.width <= 526 ? true : false;
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
    this.api.getNowStatus('TW').then(resp => {
      if (resp.Data.Code == '0') {
        this.statusText = resp.Data.StatusText;
      } else {
        this.statusText = '取得目前營運狀態';
      }
    }).finally(()=>{
      
    });
   // this.presentLoading();
    // 取得最新消息
    this.api.getNewAdvertising('10', 'TW').then(resp => {
      if (resp.Code == '0') {
        this.setStore('backgroupURL', resp.Data.BackgroupURL);
        this.setStore('banner', resp.Data.banner);
      } 
    }).catch((e)=>{
      //this.onDismiss();
    }).finally(()=>{
      //this.onDismiss();
    });
    // 取得重大訊息
    this.api.getImportant('TW').then(resp => {
      if (resp.Code == '0') {
        this.title = resp.Data.title;
      }else{
        this.alert('取得重大訊息錯誤');
      }
    });
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

  }

  async getImportant() {

  }

  async onLinkApp() {
    const url = "https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php";
    this.goToBrowser(url);
    //const value = await AppLauncher.canOpenUrl({ url: 'com.android.chrome' });
  }

  async getNewAdvertising() {
    // 導到App todo
    const url = 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php';
    this.goToBrowser(url);
  }


  async onClickSlide(e) {
    console.log(e);
    //this.opened = true;
    //this.selectBanner = e;
    this.goToBrowser(e.TextLink);
  }

  async gotoMenu(menu) {
    if (menu.type == 'app') {
      const userInfo = this.getStore('userInfo');
      console.log(userInfo)
      if (userInfo == null) {
        this.onNavigate('/dashboards/login');
        return;
      }
      this.onNavigate(menu.url);
    } else {
      this.goToBrowser(menu.url);
    }
  }
}
