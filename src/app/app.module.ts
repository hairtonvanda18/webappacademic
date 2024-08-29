import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalLayoutComponent } from './shared/components/modal/modal-layout/modal-layout.component';
import { NotificationLayoutComponent } from './shared/components/notification/notification-layout/notification-layout.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalLayoutComponent,
    NotificationLayoutComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ]
})
export class AppModule { }
