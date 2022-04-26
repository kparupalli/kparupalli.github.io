import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';
import { NavigationbarComponent } from '../navigationbar/navigationbar.component';
import { NavBarService } from '../navbar.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  clothings: Clothing[] = [];
  sizes: string[] = ["XS","S","M","L", "XL"];
  selected: string = "XS";
  dropdownFilter: string = "";

  constructor(private clothService: ClothService, private navbarService: NavBarService, private snackBar: MatSnackBar) { }

  getItems(): void {
    this.clothings = this.clothService.getClothingItems();
  }

  ngOnInit(): void {
    this.sendMessage();
    this.getItems();
  }

  addItemToCart(cloth: Clothing): void{
    console.log("inside cloth componenet addItemToCart " + JSON.stringify(cloth));
    console.log("Size: " + JSON.stringify(this.selected));
    cloth.size = this.selected;
    this.clothService.addItemToCart(cloth);
    this.showSnackbar("Added " + cloth.name + " to Cart!");
    this.selected = "XS";
  }

  showSnackbar(content: any) {
    this.snackBar.open(content, '',{
      duration: 500
    });
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.navbarService.sendUpdate(2);
  }

  selectSize (event: any) {
    //update the ui
    console.log("Event: " + JSON.stringify(event));
    this.selected = event.target.value;
  }

  selectItem(filter: any){
    //console.log("filter: " + JSON.stringify(filter.target.value));
    this.dropdownFilter = filter.target.value;
    if(this.dropdownFilter.includes("A-Z")){
      //console.log("Inside if statement");
      this.clothings = this.clothings.sort(function( a, b ) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
      //console.log(JSON.stringify(this.clothings));
    }
    if(this.dropdownFilter.includes("LH")){
      this.clothings = this.clothings.sort(function( a, b ) {
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
    });
      //console.log(JSON.stringify(this.clothings));
    }
    if(this.dropdownFilter.includes("HL")){
      this.clothings = this.clothings.sort(function( a, b ) {
        return b.price < a.price ? -1 : b.price > a.price ? 1 : 0;
    });
      //console.log(JSON.stringify(this.clothings));
    }

  }


}
