import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardsPageRoutingModule } from './dashboards-routing.module';
import { IonicInputMaskModule } from "@thiagoprz/ionic-input-mask";
import { SharedModule } from '../../_shared/shared/shared.module';
import { NgxBarcode6Module } from 'ngx-barcode6';

import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';
import { NewsContentComponent } from '../news/news-coontent/news-coontent.component';
import { MemberComponent } from '../member/member.component';
import { MemberModifyComponent } from '../member/member-modify/member-modify.component';
import { MemberPointsComponent } from '../member/member-points/member-points.component';
import { CarrierComponent } from '../carrier/carrier.component';
import { CarrierSelectComponent } from '../carrier/carrier-select/carrier-select.component';
import { CarrierAddComponent } from '../carrier/carrier-add/carrier-add.component';
import { ConstructComponent } from '../construct/construct.component';
import { LoginComponent } from '../login/login.component';
import { ForgotComponent } from '../login/forgot/forgot.component';
import { ChangPasswordComponent } from '../login/chang-password/chang-password.component';
import { SouvenirComponent } from '../souvenir/souvenir.component';
import { ProductComponent } from '../product/product.component';
import { ProductExchangeComponent } from '../product/product-exchange/product-exchange.component';
import { ProductConfirmComponent } from '../product/product-confirm/product-confirm.component';
import { DelayComponent } from '../delay/delay.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    DashboardsPageRoutingModule,
    IonicInputMaskModule,
    NgxBarcode6Module
  ],
  declarations: [
    DashboardsPage,
    NewsComponent,
    NewsContentComponent,
    MemberComponent,
    MemberModifyComponent,
    MemberPointsComponent,
    CarrierComponent,
    CarrierSelectComponent,
    CarrierAddComponent,
    ConstructComponent,
    LoginComponent,
    ForgotComponent,
    ChangPasswordComponent,
    SouvenirComponent,
    ProductComponent,
    ProductExchangeComponent,
    ProductConfirmComponent,
    DelayComponent]
})
export class DashboardsPageModule { 
  constructor() {
  }
}
