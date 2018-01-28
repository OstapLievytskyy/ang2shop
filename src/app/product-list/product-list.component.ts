import { Component, OnInit } from '@angular/core';
import { Product } from '../product/classes/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productList = this.productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
    console.log(this.productList);
  }

}
