import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: '關閉', //iOS only
    closebuttoncolor: '#f3e5f5',
    toolbarcolor: '#7b1fa2',
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    toolbarposition: 'top',
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    //presentationstyle: 'pagesheet',//iOS only  
    fullscreen: 'no',//Windows only Ｘ
  };

  public appPages = [
    { title: '首頁', url: 'dashboards', icon: 'home', mode: 'APP' },
    //{ title: '最新消息', url: 'dashboards/news', icon: 'megaphone' },
    { title: '票價時刻', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable-search.php', icon: 'cash', mode: 'URL' },
    //{ title: '路網與車站', url: 'dashboards/construct', icon: 'navigate', mode:'APP' },
    //{ title: '列車動態', url: 'dashboards/construct#', icon: 'train', mode:'APP' },
    //{ title: '航班資訊', url: 'dashboards/construct', icon: 'calendar-number', mode:'APP' },
    { title: '票價與票種', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticket.html', icon: 'ticket', mode: 'URL' },
    { title: '沿線景點', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/life/attractions.html', icon: 'leaf', mode: 'URL' },
    //{ title: '路線規劃', url: '#', icon: 'golf', mode:'APP' },
    //{ title: '我的最愛', url: '#', icon: 'pricetag', mode:'APP' },
    { title: '會員專區', url: 'dashboards/member', icon: 'person', mode: 'APP' },
    { title: '紀念商品', url: 'dashboards/construct', icon: 'gift', mode: 'APP' },
    { title: '設定', url: 'dashboards/construct', icon: 'settings', mode: 'APP' },
  ];
  constructor(protected router: Router,
    protected inAppBrowser: InAppBrowser) { }

  public async onNav(page) {
    if (page.mode == 'URL') {
      let target = "_blank";
      this.inAppBrowser.create(page.url, target, this.options);
    } else {
      await this.router.navigate([page.url], { replaceUrl: true });
    }
  }
}
