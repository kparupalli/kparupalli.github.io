import { Injectable } from '@angular/core';
import { Clothing } from './clothing';
import { CLOTHING } from './mock-clothing';
import { SHOES } from './mock-clothing';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClothService {

  subjectNotifier: Subject<null> = new Subject<null>();
  cart: Clothing[] = [];

  constructor() { 
  }

  getClothingItems(): Clothing[]{
    return CLOTHING;
  }

  getShoeItems(): Clothing[]{
    return SHOES;
  }

  addItemToCart(item: Clothing): void{
    //console.log("inside cloth service addItemToCart " + JSON.stringify(item));
    this.cart.push(item);
    this.notifyAboutChange();
    //console.log("after add: " + JSON.stringify(this.cart));
  }

  getCartItems(): Clothing[]{
    return this.cart;
  }

  removeItem(item: Clothing): void{
    
  }
  getTotal(): number{
    return this.cart.length;
  }

  notifyAboutChange() {
    this.subjectNotifier.next();
  }
}
