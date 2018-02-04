import { Component, OnInit } from '@angular/core';
import { Product } from '../product/classes/product';
import { ProductService, CartService } from './../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  getProducts(): void {
    this.productList = this.productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

  public addToCart(product) {
    this.cartService.AddToCard(product);
  }

  public removeFromCart(product) {
    this.cartService.RemoveFromCart(product);
  }

  public isSelected(product) {
    const idList = this.cartService.ShowAll().map(({ id }) => id);
    console.log('is selected = ' + idList && idList.indexOf(product.id) >= 0);
    return idList && idList.indexOf(product.id) >= 0;
  }
}
