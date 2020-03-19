import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { StoreService } from '../services/store.service';

declare const user: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: Cart, private storeService: StoreService) { }

  ngOnInit() {
  }

  checkout() {
    console.log(user);
    if (user !== undefined && user.userId > 0) {
      this.cart.UserId = user.userId;
      this.storeService.SaveCart(this.cart).subscribe( (res: any) => {
        console.log(res);
        if (res._body !== undefined) {
            this.cart.CartId = res._body;
            // here checkoutPayment ..
          }
      });
    } else {
      window.location.href = 'account/login';
    }
  }



}
