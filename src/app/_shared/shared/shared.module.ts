import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers:[],
  exports:[
    CommonModule,
    HeaderComponent
  ]
})
export class SharedModule { }
