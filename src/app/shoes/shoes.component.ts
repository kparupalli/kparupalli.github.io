import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoes: Clothing[] = [];
  selected: string = "5";
  dropdownFilter: string = "";

  constructor(private clothService: ClothService, private snackBar: MatSnackBar) { }

  getItems(): void {
    this.shoes = this.clothService.getShoeItems();
  }

  ngOnInit(): void {
    this.getItems();
  }

  addItemToCart(shoe: Clothing): void{
    //console.log("inside cloth componenet addItemToCart " + JSON.stringify(shoe));
    shoe.size = this.selected;
    this.clothService.addItemToCart(shoe);
    this.showSnackbar("Added " + shoe.name + " to Cart!")
    this.selected = "5";
  }

  showSnackbar(content: any) {
    this.snackBar.open(content, '',{
      duration: 500
    });
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
      this.shoes = this.shoes.sort(function( a, b ) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
      //console.log(JSON.stringify(this.clothings));
    }
    if(this.dropdownFilter.includes("LH")){
      this.shoes = this.shoes.sort(function( a, b ) {
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
    });
      //console.log(JSON.stringify(this.clothings));
    }
    if(this.dropdownFilter.includes("HL")){
      this.shoes = this.shoes.sort(function( a, b ) {
        return b.price < a.price ? -1 : b.price > a.price ? 1 : 0;
    });
      //console.log(JSON.stringify(this.clothings));
    }

  }

}
