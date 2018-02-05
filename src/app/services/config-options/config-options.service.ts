import { Injectable } from '@angular/core';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { Identifier } from '../../classes';

@Injectable()
export class ConfigOptionsService {

  constructor(private localStorageService: LocalStorageService) {
     }

     public setConfig(config: Identifier) {
       this.localStorageService.setItem(config);
     }

     public getConfig(id: number) {
      this.localStorageService.getItem('config', id + '');
     }
}
