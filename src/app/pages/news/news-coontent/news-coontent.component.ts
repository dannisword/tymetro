import { Component, Injector, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-news-coontent',
  templateUrl: './news-coontent.component.html',
  styleUrls: ['./news-coontent.component.scss'],
})
export class NewsContentComponent extends BaseComponent implements OnInit {
  @Input() title: string;
  public news: any;
  constructor(
    protected injector: Injector,
    protected navParams: NavParams,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.news = this.navParams.data.newsContent;
  }


  // 回上一頁
  onGoBack(event) {
    super.onBack();
  }

}
