import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent extends BaseComponent implements OnInit {
  public newsList = [
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20220331112006_0.jpg",
      "Sort": 335,
      "Title": "【桃捷公告】4月7日起，本公司配合鐵道局工程測試，微幅調整全線時刻表說明",
      "Top": 0
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20220329055848_0.jpg",
      "Sort": 337,
      "Title": "2022捷乘應猿─搭桃捷看Rakuten主場球賽享回程免費",
      "Top": 1
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20211105044512_0.jpg",
      "Sort": 332,
      "Title": "親子一日票",
      "Top": 3
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210914100924_0.jpg",
      "Sort": 304,
      "Title": "110/9/18起 班距調整公告",
      "Top": 8
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210604022611_0.jpg",
      "Sort": 325,
      "Title": "中大型寵物開放搭乘機捷",
      "Top": 12
    }
  ];
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }


  // 回上一頁
  onGoBack(event) {
    super.onBack();
  }

}
