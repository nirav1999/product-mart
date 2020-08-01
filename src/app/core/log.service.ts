import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  // tslint:disable-next-line:typedef
  log( ...msg: any[]){
    console.log( ...msg);
  }
}
