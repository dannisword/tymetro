import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';
import { MemberComponent } from '../member/member.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsPage,
    data: { title: '首頁', isPage: false }
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { title: '最新消息', isPage: true }
  },
  {
    path: 'member',
    component: MemberComponent,
    data: { title: '會員專區', isPage: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsPageRoutingModule { }
