import { Component, OnInit } from '@angular/core';
import { Product } from './../product/classes';
import { CartService } from './../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  public productsInCart() {
    return this.cartService.ShowAll();
  }

  public removeFromCart(product) {
    this.cartService.RemoveFromCart(product);
  }

  public clearCart(product) {
    this.cartService.products = [];
  }
}
