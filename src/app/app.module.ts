import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

import { SharedModule } from './_shared/shared/shared.module';
import { RequestInterceptor, ResponseInterceptor } from './_shared/index';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { NgxBarcode6Module } from 'ngx-barcode6';

import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    SharedModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxBarcode6Module,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslateService,
    InAppBrowser,
    DatePicker,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public translate: TranslateService) {
    const lang = this.translate.getBrowserLang();
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
