import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderOption } from '../_module/headerOption';
import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';
import { MemberComponent } from '../member/member.component';
import { MemberModifyComponent } from '../member/member-modify/member-modify.component';
import { CarrierComponent } from '../carrier/carrier.component';
import { ConstructComponent } from '../construct/construct.component';

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
    path: 'member-modify',
    component: MemberModifyComponent,
    data: { title: '會員資料修改', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'carrier',
    component: CarrierComponent,
    data: { title: '載具專區', isPage: true, option: HeaderOption.Add }
  },
  {
    path: 'construct',
    component: ConstructComponent,
    data: { title: '建構中', isPage: true, option: HeaderOption.None }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsPageRoutingModule { }
