import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';
import { NewsContentComponent } from './news-coontent/news-coontent.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent extends BaseComponent implements OnInit {
  public latest: [];
  public activities: [];
  public tempNews = [{
    'Date': '2022-06-22',
    'Title': '新聞稿】今(20)日發生於花蓮規模6.0地震，桃捷公司2點因應說明新聞稿】今(20)日發生於花蓮規模6.0地震，桃捷公司2點因應說明',
    'Content': '【新聞稿】今(20)日發生於花蓮規模6.0地震，桃捷公司2點因應說明新聞稿】今(20)日發生於花蓮規模6.0地震，桃捷公司2點因應說明',
    'Img': 'https://images.unsplash.com/photo-1593733925160-6f78dc0be8b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }];
  ;

  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected sanitizer: DomSanitizer) {
    super(injector);
  }

  async ngOnInit() {
    let resp = await this.api.getLinkData('Latest');
    console.log(resp);
    if (resp.Code == 0) {
      this.latest = resp.Data;
    }

    resp = await this.api.getLinkData('Activities');
    if (resp.Code == 0) {
      this.activities = resp.Data;
    }

    this.tempNews = this.latest;
  }
  openURL() {
    const url = "https://shop.jaipurandco.com"
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onTabChang(kind) {
    this.tempNews = kind.detail.value === 'Latest' ? this.latest : this.activities;
  }
  // 點開最新消息內容
  async openNewsContent(data) {
    const options = {
      componentProps: {
        title: this.translateService.instant('最新消息'),
        data: data
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
