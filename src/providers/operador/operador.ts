import { Injectable } from '@angular/core';

@Injectable()
export class OperadorProvider {

  log:number[] = [];

  constructor() {}

  operar(op:number, n1:number, n2:number):number{
    let res = 0;
    switch(op){
      case 0: res = n1 + n2; break;
      case 1: res = n1 - n2; break;
      case 2: res =  n1 * n2; break;
      case 3: res = n1 / n2; break;
    }
    this.log.push(res);
    return res;
  }

}
