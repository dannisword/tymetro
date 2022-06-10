import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { NewsContentComponent } from './news-coontent/news-coontent.component';

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
      "Content":"智慧桃捷更美好！桃捷公司持續創新及優化服務，打造智慧交通網絡，於今(111)年5月31日通過國家通訊傳播委員會(NCC)核定並核發公眾電信網路審驗合格證明，成為全台軌道業第2家自建光纖系統並取得該執照的捷運公司。桃園機場捷運建置光纖電路總長度50.8公里，涵蓋台北市、新北市及桃園市共21座車站，部分光纖電路自行使用外，規劃80芯開放需求業者承租，目前租用的潛在客戶有電信業者、資訊業者及企業用戶，電信業者可藉此預防現有訊號中斷時，能達到即刻啟動備援訊號之目的；而資訊業者或企業用戶，可藉由本公司光纖直接將資訊傳遞至鄰近本公司沿線車站的分部資訊機房，達到資訊保密傳輸的效益。機場捷運不僅讓北北桃生活圈更為緊密連結，也期望透過捷運系統軌道佈建光纖電路，不僅完善高速傳輸智慧網，更能提升捷運沿線經濟發展。",
      "Top": 0
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20220329055848_0.jpg",
      "Sort": 337,
      "Title": "2022捷乘應猿─搭桃捷看Rakuten主場球賽享回程免費",
      "Content": "智慧桃捷更美好！桃捷公司持續創新及優化服務，打造智慧交通網絡，於今(111)年5月31日通過國家通訊傳播委員會(NCC)核定並核發公眾電信網路審驗合格證明，成為全台軌道業第2家自建光纖系統並取得該執照的捷運公司。桃園機場捷運建置光纖電路總長度50.8公里，涵蓋台北市、新北市及桃園市共21座車站，部分光纖電路自行使用外，規劃80芯開放需求業者承租，目前租用的潛在客戶有電信業者、資訊業者及企業用戶，電信業者可藉此預防現有訊號中斷時，能達到即刻啟動備援訊號之目的；而資訊業者或企業用戶，可藉由本公司光纖直接將資訊傳遞至鄰近本公司沿線車站的分部資訊機房，達到資訊保密傳輸的效益。機場捷運不僅讓北北桃生活圈更為緊密連結，也期望透過捷運系統軌道佈建光纖電路，不僅完善高速傳輸智慧網，更能提升捷運沿線經濟發展。",
      "Top": 1
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20211105044512_0.jpg",
      "Sort": 332,
      "Title": "親子一日票",
      "Content": "智慧桃捷更美好！桃捷公司持續創新及優化服務，打造智慧交通網絡，於今(111)年5月31日通過國家通訊傳播委員會(NCC)核定並核發公眾電信網路審驗合格證明，成為全台軌道業第2家自建光纖系統並取得該執照的捷運公司。桃園機場捷運建置光纖電路總長度50.8公里，涵蓋台北市、新北市及桃園市共21座車站，部分光纖電路自行使用外，規劃80芯開放需求業者承租，目前租用的潛在客戶有電信業者、資訊業者及企業用戶，電信業者可藉此預防現有訊號中斷時，能達到即刻啟動備援訊號之目的；而資訊業者或企業用戶，可藉由本公司光纖直接將資訊傳遞至鄰近本公司沿線車站的分部資訊機房，達到資訊保密傳輸的效益。機場捷運不僅讓北北桃生活圈更為緊密連結，也期望透過捷運系統軌道佈建光纖電路，不僅完善高速傳輸智慧網，更能提升捷運沿線經濟發展。",
      "Top": 3
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210914100924_0.jpg",
      "Sort": 304,
      "Title": "110/9/18起 班距調整公告",
      "Content": "智慧桃捷更美好！桃捷公司持續創新及優化服務，打造智慧交通網絡，於今(111)年5月31日通過國家通訊傳播委員會(NCC)核定並核發公眾電信網路審驗合格證明，成為全台軌道業第2家自建光纖系統並取得該執照的捷運公司。桃園機場捷運建置光纖電路總長度50.8公里，涵蓋台北市、新北市及桃園市共21座車站，部分光纖電路自行使用外，規劃80芯開放需求業者承租，目前租用的潛在客戶有電信業者、資訊業者及企業用戶，電信業者可藉此預防現有訊號中斷時，能達到即刻啟動備援訊號之目的；而資訊業者或企業用戶，可藉由本公司光纖直接將資訊傳遞至鄰近本公司沿線車站的分部資訊機房，達到資訊保密傳輸的效益。機場捷運不僅讓北北桃生活圈更為緊密連結，也期望透過捷運系統軌道佈建光纖電路，不僅完善高速傳輸智慧網，更能提升捷運沿線經濟發展。",
      "Top": 8
    },
    {
      "Date": "2022-04-01",
      "PicLink": "https://www.tymetro.com.tw/tymetro-new/upload/banner/20210604022611_0.jpg",
      "Sort": 325,
      "Title": "中大型寵物開放搭乘機捷",
      "Content":"智慧桃捷更美好！桃捷公司持續創新及優化服務，打造智慧交通網絡，於今(111)年5月31日通過國家通訊傳播委員會(NCC)核定並核發公眾電信網路審驗合格證明，成為全台軌道業第2家自建光纖系統並取得該執照的捷運公司。桃園機場捷運建置光纖電路總長度50.8公里，涵蓋台北市、新北市及桃園市共21座車站，部分光纖電路自行使用外，規劃80芯開放需求業者承租，目前租用的潛在客戶有電信業者、資訊業者及企業用戶，電信業者可藉此預防現有訊號中斷時，能達到即刻啟動備援訊號之目的；而資訊業者或企業用戶，可藉由本公司光纖直接將資訊傳遞至鄰近本公司沿線車站的分部資訊機房，達到資訊保密傳輸的效益。機場捷運不僅讓北北桃生活圈更為緊密連結，也期望透過捷運系統軌道佈建光纖電路，不僅完善高速傳輸智慧網，更能提升捷運沿線經濟發展。",
      "Top": 12
    }
  ];
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }


  // 點開最新消息內容

  async openNewsContent(params) {
    console.log('params',params);

    const options = {
      componentProps: {
        title: this.translateService.instant('最新消息'),
        newsContent: params
      },
      swipeToClose: true
    };
    const modelData = await this.openModal(NewsContentComponent, options);
    // 回傳值
    console.log('modelData',modelData);
  }

  onGoBack(event) {
    this.onNavigate('/dashboards');
  }
}
