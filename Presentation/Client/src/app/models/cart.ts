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
    this.CartName = environment.cartName;
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

    const params = {
      url: environment.paymentGatewayUrl,
      options: {
        key: environment.paymentGatewayKey,
        salt: environment.paymentGatewaySalt,
        txnid: (Math.random() * 10000000000).toFixed(0),
        amount: this.Total,
        productinfo: this.CartName + '_' + this.Total,
        firstname: user.name,
        email: user.email,
        phone: user.contactNo,
        surl: environment.baseAddress + '/app/paymentStatus',
        furl: environment.baseAddress + '/app/paymentStatus',
        service_provider: '',
        hash: '',
        udf1: this.CartId,
        udf2: user.UserId
      }
    };

    const str = params.options.key + '|' + params.options.txnid +
        '|' + params.options.amount + '|' + params.options.productinfo +
        '|' + params.options.txnid + '|' + params.options.firstname +
        '|' + params.options.email + '|' + params.options.udf1 +
        '|' + params.options.udf2 + '|||||||||' + params.options.salt;

    params.options.hash = CryptoJS.SHA512(str).toString();

    const form = $('<form></form');
    form.attr('action', params.url);
    form.attr('method', 'POST');
    form.attr('style', 'display:none');
    this.addFormFields(form, params.options);
    $('body').append(form);

    // submit form
    this.clearCart();

    form.submit();
    form.remove();


  }

  // Adding hidden fields to form
  addFormFields(form: any, data: any) {
    if (data != null) {
      $.each(data,  (Name: string, value: string)  => {
        if (value != null) {
          const input = $('<input />').attr('type', 'hidden')
            .attr('Name', Name).val(value);
          form.append(input);
        }
      });
    }
  }


}

