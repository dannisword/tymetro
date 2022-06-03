import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardsPageRoutingModule } from './dashboards-routing.module';

import { SharedModule } from '../../_shared/shared/shared.module';

import { DashboardsPage } from './dashboards.page';
import { NewsComponent } from '../news/news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DashboardsPageRoutingModule
  ],
  declarations: [
    DashboardsPage,
    NewsComponent]
})
export class DashboardsPageModule { }
