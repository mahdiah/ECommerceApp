import { Injectable } from '@angular/core';
import { CartItem } from './CartItem';
import { environment } from '../../environments/environment';



declare const $: any;
declare const CryptoJS: any;
declare const localStorage: any;

@Injectable()
export class Cart {
  CartId: number;
  Items: CartItem[];
  Total: number;
  TotalItems: number;
  UserId: number;
  CreatedDate: string;
  CartName: string;

  constructor() {
    this.CartName = 'Cart_Test';
    this.Items = [];
    this.TotalItems = 0;

    this.loadCart();
  }


  // load cart
  loadCart() {
    if (localStorage != null && JSON != null
      && localStorage[this.CartName] !== undefined
      && localStorage[this.CartName] !== '') {
      this.Items = JSON.parse(localStorage[this.CartName]);
      this.calculateCart();
    }
  }

  clearCart() {
    if (localStorage != null && JSON != null) {
      localStorage[this.CartName] = '';
    }
    this.Total = 0;
    this.TotalItems = 0;
    this.Items = [];
  }

  saveCart() {
    if (localStorage != null && JSON != null) {
      localStorage[this.CartName] = JSON.stringify(this.Items);
    }
  }


  addToCart(productId: number, name: string, unitPrice: number, quantity: number) {
    console.log(`product { id: ${productId} - name: ${name} - price: ${unitPrice}}`);
    if (quantity !== undefined) {
      // update for quantity existing
      let found = false;
      for (let i = 0; i < this.Items.length && !found; i++) {
        const item: CartItem = this.Items[i];
        if (item.ProductId === productId) {
          found = true;
          item.Quantity += quantity;
        }
      }

      // new item add it
      if (!found) {
        const item = new CartItem(productId, name, unitPrice, quantity);
        this.Items.push(item);
      }

      this.calculateCart();

      this.saveCart();
    }
  }

  deleteFromCart(ProductId: number) {
    for (let i = 0; i < this.Items.length ; i++) {
      const item: CartItem = this.Items[i];
      if (item.ProductId === ProductId) {
        this.Items.splice(i, 1);
        break;
      }
    }
    this.calculateCart();
    this.saveCart();
  }


  calculateCart() {
    let count = 0;
    let price = 0;
    for (const item of this.Items) {
      count += item.Quantity;
      price += item.Total = item.Quantity * item.UnitPrice ;
    }
    this.TotalItems = count;
    this.Total = price;
  }


  checkoutPayment(user: any) {

  }


}

