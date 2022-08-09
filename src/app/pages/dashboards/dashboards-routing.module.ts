import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderOption } from '../_module/headerOption';
import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';
import { MemberComponent } from '../member/member.component';
import { MemberModifyComponent } from '../member/member-modify/member-modify.component';
import { CarrierComponent } from '../carrier/carrier.component';
import { CarrierSelectComponent } from '../carrier/carrier-select/carrier-select.component';
import { ConstructComponent } from '../construct/construct.component';
import { LoginComponent } from '../login/login.component';
import { ForgotComponent } from '../login/forgot/forgot.component';
import { SouvenirComponent } from '../souvenir/souvenir.component';
import { ProductComponent } from '../product/product.component';
import { ProductExchangeComponent } from '../product/product-exchange/product-exchange.component';
import { ProductConfirmComponent } from '../product/product-confirm/product-confirm.component';
import { AbnormalComponent } from '../abnormal/abnormal.component';
import { DelayComponent } from '../delay/delay.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardsPage,
    data: { title: '首頁', isPage: false, option: HeaderOption.Person }
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { title: '最新公告', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'member',
    component: MemberComponent,
    data: { title: '會員專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'member-modify/:new',
    component: MemberModifyComponent,
    data: { title: '會員資料修改', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'register/:new',
    component: MemberModifyComponent,
    data: { title: '會員註冊', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'carrier',
    component: CarrierComponent,
    data: { title: '我的票卡', isPage: true, option: HeaderOption.Add }
  },
  {
    path: 'carrier-select',
    component: CarrierSelectComponent,
    data: { title: '我的票卡', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'construct',
    component: ConstructComponent,
    data: { title: '建構中', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: '加入會員', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    data: { title: '忘記密碼', isPage: true, option: HeaderOption.None }
  },

  {
    path: 'souvenir',
    component: SouvenirComponent,
    data: { title: '兌換專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'abnormal',
    component: AbnormalComponent,
    data: { title: '連線異常', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'product',
    component: ProductComponent,
    data: { title: '兌換專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'product-exchange',
    component: ProductExchangeComponent,
    data: { title: '兌換專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'product-confirm',
    component: ProductConfirmComponent,
    data: { title: '兌換專區', isPage: true, option: HeaderOption.None }
  },
  {
    path: 'delay',
    component: DelayComponent,
    data: { title: '誤點證明', isPage: true, option: HeaderOption.None }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsPageRoutingModule { }
