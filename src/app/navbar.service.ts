import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class NavBarService{

    homecolor = '#fff';
    clothingcolor = '#fff';
    shoescolor = '#fff';
    cartcolor = '#fff';
    tracker: string[] = []

    private subjectName = new Subject<any>(); //need to create a subject

    constructor() { 
    }

    toggleColor(index: number){
        this.tracker = [];
        if(index == 1){
          this.homecolor = '#74a2bbd5';
          this.clothingcolor = '#fff';
          this.shoescolor = '#fff';
          this.cartcolor = '#fff';
        }
        else if(index == 2){
          this.clothingcolor = '#74a2bbd5';
          this.homecolor = '#fff';
          this.shoescolor = '#fff';
          this.cartcolor = '#fff';
        }
        else if(index == 3){
          this.shoescolor = '#74a2bbd5';
          this.clothingcolor = '#fff';
          this.homecolor = '#fff';
          this.cartcolor = '#fff';
        }
        else{
          this.cartcolor = '#74a2bbd5';
          this.clothingcolor = '#fff';
          this.homecolor = '#fff';
          this.shoescolor = '#fff';
        }
        this.tracker.push(this.homecolor);
        this.tracker.push(this.clothingcolor);
        this.tracker.push(this.shoescolor);
        this.tracker.push(this.cartcolor);
        //console.log("After adding: " + JSON.stringify(this.tracker));
      }

    getColor(): string[]{
        //console.log(JSON.stringify(this.tracker));
        return this.tracker;
    }

    sendUpdate(message: number) { //the component that wants to update something, calls this fn
        this.subjectName.next(2); //next() will feed the value in Subject
        //console.log("Adding msg: " + JSON.stringify(this.subjectName));
    }

    getUpdate(): Observable<any> { //the receiver component calls this function 
        return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
    }
}