import { Injectable, Input } from '@angular/core';
import { ProductInCart, CategoryEnum } from './../../components/product/classes';

@Injectable()
export class CartService {

  @Input()
  products: ProductInCart[];

  constructor() {
    this.products = [];
   }

  public AddToCard(product) {
    const idList = this.products.map(({ id }) => id);
    if (idList && idList.indexOf(product.id) >= 0) {
      const existingProduct = this.products[idList.indexOf(product.id)];
      existingProduct.count++;
    } else {
      const item = new ProductInCart();
      item.id = product.id;
      item.name = product.name;
      item.description = product.description;
      item.price = product.price;
      item.category = product.category;
      item.imgPath = product.imgPath;
      item.isAvailable = product.isAvailable;
      item.equivalents = product.equivalents;
      item.ingredients = product.ingredients;
      item.count = 1;
      this.products.push(item);
    }
  }

  public RemoveFromCart(product) {
    const idList = this.products.map(({ id }) => id);
    if (idList && idList.indexOf(product.id) >= 0) {
      const existingProduct = this.products[idList.indexOf(product.id)];
      if (existingProduct.count === 1) {
        this.products.splice(this.products.indexOf(product, 1));
      } else {
        existingProduct.count--;
      }
    }
  }
  public ShowAll() {
    return this.products;
  }
}
