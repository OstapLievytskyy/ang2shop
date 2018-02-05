import { Component } from '@angular/core';
import { ProductService, CartService, ConstantsService } from './services';
import { KeyValuePair } from './classes/index';

const constService = new ConstantsService();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: ConstantsService, useValue: constService}]
})
export class AppComponent {
  constants: KeyValuePair[];

  constructor(private ConstService: ConstantsService) {
    this.constants = this.ConstService.getAllData();
  }

  public showTitle() {
    return this.constants.find(item => item.id === 'TITLE').value + ' ' +
    this.constants.find(item => item.id === 'VERSION').value;
  }

}
