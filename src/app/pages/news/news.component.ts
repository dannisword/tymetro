import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';
import { NewsContentComponent } from './news-coontent/news-coontent.component';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent extends BaseComponent implements OnInit {
  public latest: [];
  public activities: [];

  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected sanitizer: DomSanitizer) {
    super(injector);
  }

  ngOnInit() {
    this.api.getLink('Latest').then(res => {
      if (res.Code == 0) {
        this.latest = res.Data;
      }
    });

    this.api.getLink('Activities').then(res => {
      if (res.Code == 0) {
        this.activities = res.activities;
      }
    });
  }
  openURL(){
    //const url = "https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/11";

    const url = "https://shop.jaipurandco.com"
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onTabChang(kind) {
    console.log(kind.detail.value);
  }
  // 點開最新消息內容
  async openNewsContent(params) {
    const options = {
      componentProps: {
        title: this.translateService.instant('最新消息'),
        newsContent: params
      },
      swipeToClose: true
    };
    const modelData = await this.openModal(NewsContentComponent, options);
    // 回傳值
    console.log('modelData', modelData);
  }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }
}
