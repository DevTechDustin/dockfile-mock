import { Injectable } from '@angular/core';

/**
 * @description
 * @class
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {}

  log(msg: any) {
    console.log(msg);
  }
}
