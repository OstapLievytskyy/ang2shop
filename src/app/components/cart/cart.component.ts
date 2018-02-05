import { Component, OnInit } from '@angular/core';
import { Product } from './../../classes';
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

  public getTotal() {
    return this.cartService
      .ShowAll().map(({ price, count }) => price * count)
      .reduce((sum, current) => sum + current);
  }
}
