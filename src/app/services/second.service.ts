import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  makeStuff(stuff: string) {
    return stuff.toUpperCase();
  }
}
