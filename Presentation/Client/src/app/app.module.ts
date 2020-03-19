import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CartComponent } from './cart/cart.component';
import { Cart } from './models/cart';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [StoreService, Cart, {
    provide: LOCALE_ID,
    useValue: 'fr'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
