import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  currentConfiguration = new Map<string,string|null>();

  constructor() {
    Object.keys(localStorage).map(key => this.currentConfiguration.set(key,localStorage.getItem(key)));
    if(this.currentConfiguration.size == 0) {
      this.setConfiguration('inverterAddress', '');
      this.setConfiguration('pollingRate', '5');
    }
  }

  setConfiguration(item: string, value: string) {
    localStorage.setItem(item, value);
    this.currentConfiguration.set(item, value);
  }

  getConfiguration(item: string) {
    return localStorage.getItem(item)
  }
  
}
