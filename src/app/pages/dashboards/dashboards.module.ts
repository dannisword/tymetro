import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardsPageRoutingModule } from './dashboards-routing.module';

import { SharedModule } from '../../_shared/shared/shared.module';

import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';
import { NewsContentComponent } from '../news/news-coontent/news-coontent.component';
import { MemberComponent } from '../member/member.component';
import { MemberModifyComponent } from '../member/member-modify/member-modify.component';
import { CarrierComponent } from '../carrier/carrier.component';
import { CarrierSelectComponent } from '../carrier/carrier-select/carrier-select.component';
import { CarrierAddComponent } from '../carrier/carrier-add/carrier-add.component';
import { ConstructComponent } from '../construct/construct.component';
import { LoginComponent } from '../login/login.component';
import { ForgotComponent } from '../login/forgot/forgot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    DashboardsPageRoutingModule
  ],
  declarations: [
    DashboardsPage,
    NewsComponent,
    NewsContentComponent,
    MemberComponent,
    MemberModifyComponent,
    CarrierComponent,
    CarrierSelectComponent,
    CarrierAddComponent,
    ConstructComponent,
    LoginComponent,
    ForgotComponent]
})
export class DashboardsPageModule { }
