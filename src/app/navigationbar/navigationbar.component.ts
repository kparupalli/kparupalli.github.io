import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../navbar.service';
import { ClothService } from '../cloth.service';
import { Subscription } from 'rxjs';
import { MatBadgeModule } from '@angular/material/badge';
    

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  notifierSubscription: Subscription = this.clothService.subjectNotifier.subscribe(notified => {
    // originator has notified me. refresh my data here.
    this.totalItems = this.clothService.getTotal();
  });
  homecolor = '';
  clothingcolor = '';
  shoescolor = '';
  cartcolor = '';
  arr: string[] = [];
  totalItems = 0;

  messageReceived: any;
  //private subscriptionName: Subscription; //important to create a subscription

  constructor(private clothService: ClothService) { 
    // subscribe to sender component messages
    /*this.subscriptionName = this.navbarService.getUpdate().subscribe
    (message => { //message contains the data sent from service
    if(message){
      this.messageReceived = message;
      this.toggle(message);
    }
    //console.log(JSON.stringify(this.messageReceived));
    }); */
  }

  ngOnInit(): void {
    //this.navbarService.toggleColor(1);
    //this.setValues();
    this.totalItems = this.clothService.getTotal();
  }

  /*
  setValues() {
    this.arr = this.navbarService.getColor();
    this.homecolor = this.arr[0];
    this.clothingcolor = this.arr[1];
    this.shoescolor = this.arr[2];
    this.cartcolor = this.arr[3];

  }

  toggle(n: number){
    this.navbarService.toggleColor(n);
    this.setValues();
  }

  
  <button mat-flat-button [style.background]="this.homecolor" (click)="toggle(1)" routerLink="/home">Home</button>  
  <button mat-flat-button [style.background]="this.clothingcolor" (click)="toggle(2)" routerLink="/clothing">Clothing</button>
  <button mat-flat-button [style.background]="this.shoescolor" (click)="toggle(3)" routerLink="/shoes">Shoes</button>
  <button mat-flat-button [style.background]="this.cartcolor" (click)="toggle(4)" routerLink="/cart">Cart</button>
  */

}
