import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Product } from '../models/Product';
import { StoreService } from '../services/store.service';
import { Cart } from '../models/cart';
import * as $ from 'jquery';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: [],
  animations: [
    trigger('fadeIn', [
      // state('active', style({
      //   opacity: '1'
      // })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class StoreComponent implements OnInit {

  products: Product[];
  constructor(private storeService: StoreService, public cart: Cart) { }

  ngOnInit() {
    this.storeService.GetProducts().subscribe((res) => {
      this.products = res;
      this.products.forEach(it => console.log(it.imagePath));
    });


    const jQuery: any = $.noConflict();
    jQuery(document).ready( () => {
      jQuery('.sidenav').sidenav();
    });

    }


}
