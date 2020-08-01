import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  // tslint:disable-next-line:quotemark
  TOKEN_KEY = "ProductMart.AuthToken";

  constructor() { }

  // tslint:disable-next-line:typedef
  setToken(token: string){
    if (!token){
      return;
    }
    this.removeToken();
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  // tslint:disable-next-line:typedef
  getToken() {
     return window.localStorage.getItem(this.TOKEN_KEY);
  }

  // tslint:disable-next-line:typedef
  removeToken() {
    window.localStorage.removeItem(this.TOKEN_KEY);
  }
}
