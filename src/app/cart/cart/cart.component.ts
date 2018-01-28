import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/classes/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [];
  }

  ngOnInit() {
  }

}
