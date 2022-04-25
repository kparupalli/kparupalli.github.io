import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatButtonModule} from '@angular/material/button';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CartComponent } from './cart/cart.component';
//import { BasicSnackbarComponent } from './basic-snackbar/basic-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import { RemovedialogComponent } from './cart/removedialog/removedialog.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    ClothingComponent,
    ShoesComponent,
    CartComponent,
    RemovedialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule,
    MatSnackBarModule,
    MatBadgeModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
