import { Injectable } from '@angular/core';
import { Identifier } from './../../classes';

@Injectable()
export class LocalStorageService {
  constructor() { }

  public setItem(item: Identifier) {
    localStorage.setItem(typeof(item) + item.id, JSON.stringify(item));
  }

  public getItem(typeofItem: string, id: string) {
    return localStorage.getItem(typeofItem + id);
  }

  public removeItem(typeofItem: string, id: string) {
    localStorage.removeItem(typeofItem + id);
  }
}
