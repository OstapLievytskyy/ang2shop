import { Component, OnInit } from '@angular/core';
import { Product } from '../product/classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor() {
    this.product = {
      id: 1,
      name: 'Pen',
      imgPath: 'http://www.staples.co.uk/content/images/product/GenesisExtraLarge/51/61/asset.3395161.jpg'
    };
  }

  ngOnInit() {
  }

}
