import { Injectable, Input } from '@angular/core';
import { Product, CategoryEnum } from './../../components/product/classes';

@Injectable()
export class CartService {

  @Input()
  products: Product[];

  constructor() {
    this.products = [];
   }

  public AddToCard(product) {
    const idList = this.products.map(({ id }) => id);
    if (idList && idList.indexOf(product.id) >= 0) {
      this.products.splice(this.products.indexOf(product), 1);
    } else {
      this.products.push(product);
    }
  }

  public RemoveFromCart(product) {
    this.products.splice(this.products.indexOf(product, 1));
  }
  public ShowAll() {
    return this.products;
  }
}
