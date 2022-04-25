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

}
