import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/classes/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // products: Product[];

  constructor(private cartService: CartService) {
    // this.products = this.cartService.ShowAll();
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
