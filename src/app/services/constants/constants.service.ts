import { Injectable, Output } from '@angular/core';
import { KeyValuePair } from './../../classes';
import { Key } from 'selenium-webdriver';

@Injectable()
export class ConstantsService {
  @Output()
  readonly constants: KeyValuePair[];

  constructor() {
    this.constants = [];

    let newValue = new KeyValuePair();
    newValue.id = 'VERSION';
    newValue.value = '1.0';
    this.constants.push(newValue);

    newValue = new KeyValuePair();
    newValue.id = 'TITLE';
    newValue.value = 'Shop';
    this.constants.push(newValue);
   }

   public getValue(id: string) {
     return this.constants.find(item => item.id === id).value;
   }

   public getAllData() {
     return this.constants;
   }
}
