import { Component, OnInit, Input } from '@angular/core';
import { Product, CategoryEnum } from './../../classes/';
import { ProductService } from './../../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  constructor(private productService: ProductService) {
  }

  getProduct(): void {
    this.product = this.productService.getProduct();
  }

  ngOnInit() {
  }

}
