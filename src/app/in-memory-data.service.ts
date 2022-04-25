import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Clothing } from './clothing';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    

    const clothes = [
      {id: 1, name: "Red Shirt", desc: "This is a Red Shirt", imgsrc: "assets/images/buy-1.jpg", price: 19.99},
      {id: 2, name: "Yellow Shirt", desc: "This is a Yellow Shirt", imgsrc: "/images/buy-1.jpg", price: 29.99},
      {id: 3, name: "Blue Shirt", desc: "This is a Blue Shirt", imgsrc: "/images/buy-1.jpg", price: 39.99},
      {id: 4, name: "Green Shirt", desc: "This is a Green Shirt", imgsrc: "/images/buy-1.jpg", price: 49.99},
      {id: 5, name: "Black Shirt", desc: "This is a Black Shirt", imgsrc: "/images/buy-1.jpg", price: 59.99}
  
    ];
    return {clothes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(clothes: Clothing[]): number {
    return clothes.length > 0 ? Math.max(...clothes.map(cloth => cloth.id)) + 1 : 11;
  }
}