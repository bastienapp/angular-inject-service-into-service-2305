import { Injectable } from '@angular/core';
import { SecondService } from './second.service';
import { Stuff } from '../models/stuff.model';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondService: SecondService) { }

  /*
  // ERROR TypeError: this is undefined
  mapStuff(stuff: string) {
    return new Stuff(this.secondService.makeStuff(stuff))
  }
  */

  mapStuff = (stuff: string) => {
    return new Stuff(this.secondService.makeStuff(stuff))
  }
}
