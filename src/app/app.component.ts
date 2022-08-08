import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ApiService } from './pages/_services/api.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private options: InAppBrowserOptions = {
    location: 'no',//Or 'no' 
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
    toolbarposition: 'top', // bottom
    footer: 'yes',
    footercolor: '#7b1fa2',
    hidenavigationbuttons: 'no',
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    //presentationstyle: 'pagesheet',//iOS only  
    navigationbuttoncolor: '#ffeb3b',
    fullscreen: 'no',//Windows only Ｘ
  };

  public appPages = [];
  constructor(
    protected router: Router,
    protected api: ApiService,
    protected menuCtrl: MenuController,
    protected inAppBrowser: InAppBrowser) {
    this.api.getData().then(res => {
      this.appPages = res.appPages;
    });
  }

  public async onNav(page) {
    if (page.mode == 'URL') {
      let target = "_blank";
      this.inAppBrowser.create(page.url, target, this.options);
      return;
    }

    if (page.url == 'dashboards/member') {
      const token = localStorage.getItem('Token');
      if (token == null) {
        await this.router.navigate(['dashboards/login'], { replaceUrl: true });
        return;
      }
    }
    await this.router.navigate([page.url], { replaceUrl: true });

  }
  onClose() {
    this.menuCtrl.toggle();
    //this.router.navigate(['/dashboards'], { replaceUrl: true });
  }
}
