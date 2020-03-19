import { Component } from '@angular/core';
import { Cart } from './models/cart';

declare const user: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.cart_items { display: flex; align-items: center; }']

})
export class AppComponent {
  title = 'EStore';
  user: any ;
  constructor(public cart: Cart) {
    this.user = user;
  }
}
