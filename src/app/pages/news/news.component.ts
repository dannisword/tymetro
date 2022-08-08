import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';
import { NewsContentComponent } from './news-coontent/news-coontent.component';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent extends BaseComponent implements OnInit {
  public latest: [];
  public activities: [];
  public tempNews = [];
  

  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected sanitizer: DomSanitizer) {
    super(injector);
  }

  async ngOnInit() {
    let resp = await this.api.getLinkData('Latest');
    if (resp.Code == 0) {
      this.latest = resp.Data;
    }

    resp = await this.api.getLinkData('Activities');
    if (resp.Code == 0) {
      this.activities = resp.Data;
    }

    this.tempNews = this.latest;
    for (let item of this.tempNews) {
      item.startDate = moment(item.startDate).format('YYYY-MM-DD')
    }

    console.log(this.tempNews);
  }
  openURL() {
    const url = "https://shop.jaipurandco.com"
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onTabChang(kind) {
    this.tempNews = kind.detail.value === 'Latest' ? this.latest : this.activities;
    for (let item of this.tempNews) {
      item.startDate = moment(item.startDate).format('YYYY-MM-DD')
    }
  }
  // 點開最新公告內容
  async openNewsContent(data) {
    const options = {
      componentProps: {
        title: this.translateService.instant('最新公告'),
        data: data
      },
      swipeToClose: true
    };
    const modelData = await this.openModal(NewsContentComponent, options);
  }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }
}
