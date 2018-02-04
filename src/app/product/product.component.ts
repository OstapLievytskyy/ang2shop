import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/classes/product';
import { categoryEnum } from '../product/classes/categotyEnum';
import { ProductService } from '../product.service';

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
    // this.getProduct();
  }

}
