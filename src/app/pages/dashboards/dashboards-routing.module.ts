import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsPage
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { title: '請假' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsPageRoutingModule { }
