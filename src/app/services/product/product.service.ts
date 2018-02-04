import { Injectable } from '@angular/core';
import { Product, CategoryEnum } from './../../components/product/classes';


@Injectable()
export class ProductService {

  constructor() { }

  getProduct() {
    const product = new Product();
    product.id = 0;
    product.name = 'pen';
    product.description = 'Bic';
    product.price = 10;
    product.category = CategoryEnum.bureau;
    product.imgPath = 'http://www.staples.co.uk/content/images/product/GenesisExtraLarge/51/61/asset.3395161.jpg';
    product.isAvailable = true;
    product.equivalents = [];
    product.ingredients = [];
    const numbers = [1, 2, 3];
    for (const num of numbers) {
      product.equivalents[num - 1] = 'equivalent_' + num;
      product.ingredients[num - 1] = 'ingedient_' + num;
    }
    return product;
  }

  getProducts() {
    const productList = [];
    const numbers = [1, 2, 3];
    for (const num of numbers) {
      const item = new Product();
      item.id = num;
      item.name = 'pen';
      item.description = 'Bic';
      item.price = 10;
      item.category = CategoryEnum.bureau;
      item.imgPath = 'http://www.staples.co.uk/content/images/product/GenesisExtraLarge/51/61/asset.3395161.jpg';
      item.isAvailable = true;
      item.equivalents = [];
      item.ingredients = [];
      for (const iterator of numbers) {
        item.equivalents[iterator - 1] = 'equivalent_' + iterator;
        item.ingredients[iterator - 1] = 'ingedient_' + iterator;
      }

      productList[num - 1] = item;
    }
    return productList;
  }
}
