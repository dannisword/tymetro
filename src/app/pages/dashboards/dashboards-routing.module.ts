import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderOption } from '../_module/headerOption';
import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';
import { MemberComponent } from '../member/member.component';
import { CarrierComponent } from '../carrier/carrier.component';
import { CarrierSelectComponent } from '../carrier/carrier-select/carrier-select.component';
import { CarrierAddComponent } from '../carrier/carrier-add/carrier-add.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardsPage,
    data: { title: '首頁', isPage: false, option: HeaderOption.Person }
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { title: '最新消息', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'member',
    component: MemberComponent,
    data: { title: '會員專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'carrier',
    component: CarrierComponent,
    data: { title: '載具專區', isPage: true, option: HeaderOption.Add }
  },
  {
    path: 'carrier-select',
    component: CarrierSelectComponent,
    data: { title: '載具專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'carrier-add',
    component: CarrierAddComponent,
    data: { title: '載具專區', isPage: true, option: HeaderOption.None }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsPageRoutingModule { }
